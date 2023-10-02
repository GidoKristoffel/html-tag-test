import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private readonly secretKey = "17Rfs6JfPFE4eK351Y3g63OlFZTMlEz7";

  constructor() { }

  // public encrypt(data: any): string {
  //   const encryptedData = AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  //   return encryptedData;
  // }

  public encrypt(txt: string): string {
    return AES.encrypt(txt, this.secretKey).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return AES.decrypt(txtToDecrypt, this.secretKey).toString(enc.Utf8);
  }

  // public decrypt(encryptedData: string): any {
  //   debugger;
  //   const decryptedBytes = AES.decrypt(encryptedData, this.secretKey);
  //   const decryptedBytes2 = decryptedBytes.toString(enc.Utf8);
  //   if (decryptedBytes2) {
  //     return JSON.parse(decryptedBytes2);
  //   }
  //   // if (decryptedBytes) {
  //   //   return JSON.parse(decryptedBytes);
  //   // }
  //   return '';
  // }
}
