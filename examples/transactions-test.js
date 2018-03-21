/**
 * Created by denissamohvalov on 12.02.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../dist";
import {Apis} from "omnibazaarjs-ws";

function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed); //PrivateKey.fromWif("5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"); //
    const pubKey = privKey.toPublicKey().toString();
    return {privKey, pubKey};
}

Apis.instance("ws://35.171.116.3:8090", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        Apis.instance().db_api().exec("lookup_accounts", ["denis11", 2]).then(res => console.log(res));
        let tr = new TransactionBuilder();
        tr.add_type_operation("account_update", {
            "account": "1.2.43",
            "fee": {
                amount: 1,
                "asset_id": "1.3.0"
            },
            "is_a_publisher": true,
            "is_an_escrow": true
        });
        let key1 = generateKeyFromPassword("denis11", "owner", "P5JFBv2K8fwz6i4o8U9NsbqyPf8UBzJGru5DjE5JDcB4g");
        let key2 = generateKeyFromPassword("denis11", "active", "P5JFBv2K8fwz6i4o8U9NsbqyPf8UBzJGru5DjE5JDcB4g");
        tr.add_signer(key1.privKey, key1.privKey.toPublicKey().toPublicKeyString("BTS"));
        tr.add_signer(key2.privKey, key2.privKey.toPublicKey().toPublicKeyString("BTS"));
        tr.broadcast();
    })
});

