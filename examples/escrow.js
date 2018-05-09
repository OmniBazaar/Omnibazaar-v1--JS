/**
 * Created by denissamohvalov on 12.02.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionBuilder} from "../dist";
import {Apis, ChainConfig} from "omnibazaarjs-ws";

ChainConfig.address_prefix = 'BTS';
function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed);
    const pubKey = privKey.toPublicKey().toPublicKeyString("BTS");
    return {privKey, pubKey};
}

function create_escrow_transaction(byerAcc, sellerAcc, escrowAcc) {
    TransactionBuilder.fetch_base_expiration_sec().then(sec => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_create_operation", {
            expiration_time: sec + ChainConfig.expire_in_secs_proposal,
            buyer: byerAcc.get('id'),
            seller: sellerAcc.get('id'),
            escrow: escrowAcc.get('id'),
            amount: {
                asset_id: '1.3.0',
                amount: 1000000
            },
            transfer_to_escrow: false
        });
        let key = generateKeyFromPassword("denis77", "active", "P5Jib3SrwkFpunWXDYreu2MK5DLzg9FGija47DPLr3XnU");
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

function release_escrow_transaction(escrow, buyerAcc, escrowAcc) {
    FetchChain('getAccount', 'denis77').then(acc => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_release_operation", {
            fee_paying_account: acc.get('id'),
            escrow,
            buyer_account: buyerAcc.get('id'),
            escrow_account: escrowAcc.get('id')
        });
        let key = generateKeyFromPassword("denis77", "active", "P5Jib3SrwkFpunWXDYreu2MK5DLzg9FGija47DPLr3XnU");
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

function return_escrow_transaction(escrow, sellerAcc, escrowAcc) {
    FetchChain('getAccount', 'denis10').then(acc => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("escrow_return_operation", {
            fee_paying_account: acc.get('id'),
            escrow,
            seller_account: sellerAcc.get('id'),
            escrow_account: escrowAcc.get('id')
        });
        let key = generateKeyFromPassword("denis10", "active", "P5KLMVWNF4qPYHBzUffH6WetLZHPx3zYQMTxhC6TCz6MF");
        tr.set_required_fees().then(() => {
            tr.add_signer(key.privKey, key.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.broadcast();
        });
    });
}

Apis.instance("ws://35.171.116.3:8090", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        Apis.instance().db_api().exec("lookup_accounts", ["denis77", 2]).then(res => console.log(res));
        const buyer = "denis77",
              seller = "denis10",
              escrow = "denis88";
        Promise.all([
            FetchChain("getAccount", buyer),
            FetchChain("getAccount", seller),
            FetchChain("getAccount", escrow),
        ]).then((res)=> {
            const [buyerAcc, sellerAcc, escrowAcc] = res;
            create_escrow_transaction(buyerAcc, sellerAcc, escrowAcc);
            // release_escrow_transaction('1.16.0', buyerAcc, escrowAcc);
            // return_escrow_transaction('1.16.1', sellerAcc, escrowAcc);
        });

    })
});