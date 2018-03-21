/**
 * Created by denissamohvalov on 12.02.18.
 */
import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../dist";
import {Apis, ChainConfig} from "omnibazaarjs-ws";

function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed); //PrivateKey.fromWif("5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"); //
    const pubKey = privKey.toPublicKey().toString();
    return {privKey, pubKey};
}

ChainConfig.address_prefix = "BTS";

Apis.instance("wss://dex.rnglab.org", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        let tr = new TransactionBuilder();
        tr.add_type_operation("account_update", {
            "account": "1.2.461609",
            "owner": {
                "weight_threshold": 1,
                "account_auths": [["1.2.11711", 1]],
                "key_auths": [["BTS6K1H23BNZHCxWb8o6iE83qHmNRBdtv3NkgShyMLoeRc9nkYFBk", 1]],
                "address_auths": []
            }
        });
        let key1 = generateKeyFromPassword("denis12343", "owner", "P5KCT6x7T1TaXhiZ6yhj6QEA9Vd8nz7RufwGXZi4Jn3TD");
        let key2 = generateKeyFromPassword("denis12343", "active", "P5KCT6x7T1TaXhiZ6yhj6QEA9Vd8nz7RufwGXZi4Jn3TD");
        tr.add_signer(key1.privKey, key1.privKey.toPublicKey().toPublicKeyString("BTS"));
        tr.add_signer(key2.privKey, key2.privKey.toPublicKey().toPublicKeyString("BTS"));
        tr.broadcast();
    })
});

