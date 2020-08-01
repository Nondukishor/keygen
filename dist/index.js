"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyGenerator {
    encode(str) {
        if (str)
            return Buffer.from(str.toLocaleLowerCase(), 'binary').toString('base64');
        throw new Error("Method not implemented.");
    }
    decode(str) {
        if (str)
            return Buffer.from(str, 'base64').toString('binary');
        throw new Error("Method not implemented.");
    }
    OTP(VALUE, TYPE, OTP_LENGTH) {
        throw new Error("Method not implemented.");
    }
}
exports.default = KeyGenerator;
;
