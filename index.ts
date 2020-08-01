import {IKeyGenerator, OTP_TYPE} from './IKeyGenerator';

export default class KeyGenerator implements IKeyGenerator{
 
    encode(str: string): string {
      
        if(str) return Buffer.from(str.toLocaleLowerCase(), 'binary').toString('base64')
        throw new Error("Method not implemented.");
    }
    decode(str: string): string {
        if(str) return Buffer.from(str, 'base64').toString('binary')
        throw new Error("Method not implemented.");
    }
    OTP(VALUE: string, TYPE: OTP_TYPE, OTP_LENGTH: number): string {
        throw new Error("Method not implemented.");
    }
        
};




