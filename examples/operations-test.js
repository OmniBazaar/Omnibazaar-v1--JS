/**
 * Created by denissamohvalov on 17.04.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../dist";
import {Apis, ChainConfig} from "omnibazaarjs-ws";

ChainConfig.address_prefix = 'BTS';

function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed);
    const pubKey = privKey.toPublicKey().toString();
    return {privKey, pubKey};
}

Apis.instance("ws://35.171.116.3:8090", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        Promise.all([
            FetchChain('getAccount', 'denis77'),
            FetchChain('getAccount', 'denis88'),
            FetchChain('getAccount', 'denis10')
        ]).then(result => {
            try {
                const [denis77, denis88, denis10] = result;
                let key1 = generateKeyFromPassword("denis77", "active", "P5Jib3SrwkFpunWXDYreu2MK5DLzg9FGija47DPLr3XnU");
                let tr = new TransactionBuilder();
                let memoFromKey = denis77.getIn(["options", "memo_key"]);
                let memoToKey = denis88.getIn(["options", "memo_key"]);
                let nonce = TransactionHelper.unique_nonce_uint64();

                let memo_object = {
                    from: memoFromKey,
                    to: memoToKey,
                    nonce,
                    message: Aes.encrypt_with_checksum(
                        key1.privKey,
                        memoToKey,
                        nonce,
                        "HEY DENIS MAN2"
                    )
                };
                tr.add_type_operation("transfer", {
                    from: denis77.get('id'),
                    to: denis88.get('id'),
                    reputation_vote: 5,
                    memo: memo_object,
                    amount: {
                        asset_id: "1.3.0",
                        amount: 10000000
                    },
                });
                tr.add_type_operation("transfer", {
                    from: denis77.get('id'),
                    to: denis10.get('id'),
                    memo: memo_object,
                    reputation_vote: 5,
                    amount: {
                        asset_id: "1.3.0",
                        amount: 10000000
                    },
                });
                Promise.all([
                    tr.set_required_fees(),
                    tr.update_head_block()
                ]).then(() => {
                    tr.add_signer(key1.privKey, key1.privKey.toPublicKey().toPublicKeyString('BTS'));
                    tr.broadcast();
                });
                console.log('done');
            } catch (e) {
                console.log(e);
            }
        });
    })
});