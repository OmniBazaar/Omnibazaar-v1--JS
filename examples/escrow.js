/**
 * Created by denissamohvalov on 12.02.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionBuilder, Chai} from "../dist";
import {Apis, ChainConfig} from "omnibazaarjs-ws";

import  { generateKeyFromPassword, memoObject } from './utils';

ChainConfig.address_prefix = 'BTS';


function create_escrow_transaction(key, byerAcc, sellerAcc, escrowAcc) {
    TransactionBuilder.fetch_base_expiration_sec().then(sec => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_create_operation", {
            expiration_time: sec + ChainConfig.expire_in_secs_proposal,
            buyer: byerAcc.get('id'),
            seller: sellerAcc.get('id'),
            escrow: escrowAcc.get('id'),
            amount: {
                asset_id: '1.3.0',
                amount: 10000000
            },
            transfer_to_escrow: false,
        });
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

function release_escrow_transaction(key, escrow, buyerAcc, escrowAcc, sellerAcc) {
    FetchChain('getAccount', 'denis14').then(acc => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_release_operation", {
            fee_paying_account: acc.get('id'),
            escrow,
            buyer_account: buyerAcc.get('id'),
            escrow_account: escrowAcc.get('id'),
            seller_account: sellerAcc.get('id'),
            reputation_vote_for_seller: 0,
            reputation_vote_for_buyer: 5,
            reputation_vote_for_escrow: 0,
          //  memo: memoObject("Denis yet", acc, buyerAcc, key.privKey)
        });
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

function return_escrow_transaction(key, escrow, sellerAcc, escrowAcc, buyerAcc) {
    FetchChain('getAccount', 'denis16').then(acc => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_return_operation", {
            fee_paying_account: acc.get('id'),
            escrow,
            seller_account: sellerAcc.get('id'),
            escrow_account: escrowAcc.get('id'),
            buyer_account: buyerAcc.get('id'),
            reputation_vote_for_seller: 0,
            reputation_vote_for_buyer: 0,
            reputation_vote_for_escrow: 0
        });
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

Apis.instance("ws://35.171.116.3:8090", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        const buyer = "denis14",
              seller = "denis15",
              escrow = "denis16";
        Promise.all([
            FetchChain("getAccount", buyer),
            FetchChain("getAccount", seller),
            FetchChain("getAccount", escrow),
        ]).then((res)=> {
            const [buyerAcc, sellerAcc, escrowAcc] = res;
            const key = generateKeyFromPassword("denis14", "active", "P5KY4U1Kqpy7irReWCnQLxKmMvSkPGdtUMXM7HFJPPQwL");
            const trId = '1.16.25';
            // create_escrow_transaction(key, buyerAcc, sellerAcc, escrowAcc);
            release_escrow_transaction(key, trId, buyerAcc, escrowAcc, sellerAcc);
            // return_escrow_transaction(key, trId, sellerAcc, escrowAcc, sellerAcc);
        });

    })
});