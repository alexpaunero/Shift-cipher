class ShiftCipher {
  constructor(shift) {
    this._shift = shift;
  }
  encrypt(text) {
    text = text.toUpperCase();
    let encrypted = [];
    for (let i = 0; i < text.length; i++){
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        if (charCode + this._shift > 90){
          let newCharCode = 64 + charCode + this._shift - 90;
          encrypted.push(String.fromCharCode(newCharCode));
        } else {
          let newCharCode = charCode + this._shift;
          encrypted.push(String.fromCharCode(newCharCode));
        }
      } else {
          let newCharCode = charCode;
          encrypted.push(String.fromCharCode(newCharCode));
      }
    }
    return encrypted.join('');
  } decrypt(text) {
    text = text.toLowerCase();
    let decrypted = [];
    for (let i = 0; i < text.length; i++){
      let charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        if (charCode - this._shift < 97){
          let newCharCode = charCode - this._shift + (122 - 96);
          decrypted.push(String.fromCharCode(newCharCode));
        } else {
          let newCharCode = charCode - this._shift;
          decrypted.push(String.fromCharCode(newCharCode));
        }
      } else {
          let newCharCode = charCode;
          decrypted.push(String.fromCharCode(newCharCode));
      }
    }
    return decrypted.join('');
  }

}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!'));
console.log(cipher.decrypt('K <3 OA RWRRA'));
console.log(cipher.decrypt('a'));
