import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private readonly secretKey: string = "17Rfs6JfPFE4eK351Y3g63OlFZTMlEz7";

  public encrypt(txt: string): string {
    return AES.encrypt(txt, this.secretKey).toString();
  }

  public decrypt(txtToDecrypt: string): string {
    return AES.decrypt(txtToDecrypt, this.secretKey).toString(enc.Utf8);
  }
}
