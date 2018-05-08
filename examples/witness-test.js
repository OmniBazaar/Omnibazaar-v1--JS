import {ChainStore, FetchChain, PrivateKey, TransactionHelper, Aes, TransactionBuilder} from "../dist";
import {Apis, ChainConfig} from "omnibazaarjs-ws";
import _ from 'lodash';

function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed); //PrivateKey.fromWif("5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"); //
    const pubKey = privKey.toPublicKey().toString();
    return {privKey, pubKey};
}

ChainConfig.address_prefix = "BTS";

Apis.instance("ws://35.171.116.3:8090", true)
    .init_promise.then((res) => {
    ChainStore.init().then(() => {
        Apis.instance().db_api().exec('get_objects', [['2.0.0']]).then(res => {
            Apis.instance().db_api().exec('get_objects', [res[0]['active_witnesses']]).then(topProcessors => {
                console.log(topProcessors);
            });

        })
    })
});