// import { AESDecryptFromBase64, AESEncryptToBase64 } from "./crypto";
import Utf8 from "crypto-js/enc-utf8";

// console.log('1');
// console.log(Buffer.from('data', 'utf8'));
// console.log('1');
// console.log(AESEncryptToBase64('datdfadfadfa', false));
// console.log(AESDecryptFromBase64('nxn0h5JuB2g0MqQA+TxXHg==', false));
const kBytes = Utf8.parse("VBA1NUS6T8UID2I6OBF7158899CT4F3C");
const iBytes = Utf8.parse("VBA1NUS6T8UID2I6");

console.log(kBytes, iBytes);

// const encrypted = CryptoJS.AES.encrypt(
//   CryptoJS.enc.Utf8.parse("data"),
//   kBytes,
//   {
//     iv: iBytes,
//   }
// ).toString();
//
// console.log(encrypted);
// console.log(encrypted.ciphertext.toString(CryptoJS.enc.Base64));
//
// const encryptedBytes = CryptoJS.enc.Base64.parse('V9bcpXLf6dYpD6Qqqw4zYQ==');
//
// const aesDecryptor = CryptoJS.AES.decrypt('nG6tVgEQPGU2GvOIdnwTjg==', kBytes, {
//   iv: iBytes,
// }).toString(CryptoJS.enc.Utf8);
//
// console.log(aesDecryptor);
