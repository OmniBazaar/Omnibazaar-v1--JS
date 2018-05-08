import { Signature } from "../dist";

const signature = Signature.sign("denis", key.privKey);
const result = Signature.fromHex(signature.toHex()).verifyBuffer(new Buffer("denis"), key.privKey.toPublicKey());
console.log("RESULT ", result);