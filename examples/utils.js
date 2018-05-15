/**
 * Created by denissamohvalov on 15.05.18.
 */
import {
    TransactionHelper,
    Aes,
    PrivateKey
} from "../dist";

export function memoObject(memo, fromAccount, toAccount, pKey) {
    let memoFromKey = fromAccount.getIn(["options","memo_key"]);
    let memoToKey = toAccount.getIn(["options","memo_key"]);
    let nonce = TransactionHelper.unique_nonce_uint64();

    return {
        from: memoFromKey,
        to: memoToKey,
        nonce,
        message: Aes.encrypt_with_checksum(
            pKey,
            memoToKey,
            nonce,
            memo
        )
    }
}

export function generateKeyFromPassword(accountName, role, password) {
    const seed = accountName + role + password;
    const privKey = PrivateKey.fromSeed(seed);
    const pubKey = privKey.toPublicKey().toPublicKeyString("BTS");
    return {privKey, pubKey};
}