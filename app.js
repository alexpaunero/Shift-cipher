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
        if (charCode + this.shift > 90){
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
  }
  decrypt(text) {

  }

}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!'));
