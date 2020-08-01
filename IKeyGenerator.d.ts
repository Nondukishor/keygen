
   export enum OTP_TYPE{
      STRING='STRING',
      NUMBER='NUMBER',
      NUM_STR='NUM_STR'

   }


   export interface IKeyGenerator {
       decode(str:string):string
       encode(str:string):string
       OTP(VALUE:string,TYPE:OTP_TYPE,OTP_LENGTH:number):string
    }

