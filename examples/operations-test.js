/**
 * Created by denissamohvalov on 17.04.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../dist";
import {Apis} from "omnibazaarjs-ws";

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
            FetchChain('getAccount', 'denis88')
        ]).then(result => {
            const [denis77, denis88] = result;
            let tr = new TransactionBuilder();
            tr.add_type_operation("transfer", {
                from: denis77.get('id'),
                to: denis88.get('id'),
                reputation_vote: 5,
                amount: {
                    asset_id: "1.3.0",
                    amount: 1000000
                },
            });
            let key1 = generateKeyFromPassword("denis77", "active", "P5Jib3SrwkFpunWXDYreu2MK5DLzg9FGija47DPLr3XnU");
            tr.add_signer(key1.privKey, key1.privKey.toPublicKey().toPublicKeyString("BTS"));
            tr.set_required_fees();
            tr.broadcast();
        });
    })
});