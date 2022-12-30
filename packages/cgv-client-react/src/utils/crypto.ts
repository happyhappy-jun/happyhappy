import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const kBytes = Utf8.parse("VBA1NUS6T8UID2I6OBF7158899CT4F3C");
const iBytes = Utf8.parse("VBA1NUS6T8UID2I6");

export const decrypt = (ciphertext: string) => {
  return AES.decrypt(ciphertext, kBytes, {
    iv: iBytes,
  }).toString(Utf8);
};

export const encrypt = (plaintext: string) => {
  return AES.encrypt(plaintext, kBytes, {
    iv: iBytes,
  }).toString();
};
