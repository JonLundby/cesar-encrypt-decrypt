"use strict";

const alphabetStr = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789";
let alphabetArr = [];
let rotationNum = -10;
let positiveRotation = false;
//let userTextStr = "the rat is in the house";
//let userTextArr = [];

window.addEventListener("load", startApp);

function startApp() {
  //making an alphabet array from alphabetStr
  alphabetArr = alphabetStr.split("");

  //eventlistener for encode btn.
  document.querySelector("#user-decoded-text-form").addEventListener("submit", encodeText);

  //eventlistener for rotation number
  document.querySelector("#rotation-number").addEventListener("change", setRotationNum);

}

function setRotationNum(event) {
  // console.log("rotnoum called");
  const value = event.target.value;
  rotationNum = Number(value);
  
  if (rotationNum >= 0) {
    positiveRotation = true
  } else {
    positiveRotation = false;
  }
}

function encodeText(event) {
  event.preventDefault();
  
  const form = event.target;
  const userTextStr = form.userText.value;
  let userTextArr = [];
  let encryptionArr = [];
  let encryptedLetter = "";
  let encryptedText = "";
  userTextArr = userTextStr.split("");
  
  document.querySelector("#encodedText").textContent = "";

  if (positiveRotation) {
    positiveEncryption();
  } else {
    negativeEncryption();
  }

  function positiveEncryption() {
    console.log("positive encryption called")
    //iterating over each letter of the user text array
    for (let i = 0; i < userTextArr.length; i++) {
      const letterUserTxt = userTextArr[i];
      if (letterUserTxt === " " || letterUserTxt === ".") {
        // encryptedLetter = letterUserTxt;
        encryptionArr.push(letterUserTxt);
      }

      //iterating over each letter in the alphabet and checking if it is equal to the given iterated letter of the user text
      for (let j = 0; j < alphabetArr.length; j++) {
        const letterAlphabet = alphabetArr[j];
        let calibrationNum = alphabetArr.length;

        //checking if rotationNum pushes letterUserTxt out of alphabetArr range and pushing encryption
        if (letterUserTxt === letterAlphabet && j + rotationNum >= alphabetArr.length) {
          calibrationNum = rotationNum - (alphabetArr.length - j)
          encryptedLetter = alphabetArr[calibrationNum];
          encryptionArr.push(encryptedLetter);
        } else if (letterUserTxt === letterAlphabet) {
          encryptedLetter = alphabetArr[j + rotationNum];
          encryptionArr.push(encryptedLetter);
        }
      }
    }
    
    //sending encrypted text to "#encodedText"
    encryptedText = encryptionArr.join(``);
    document.querySelector("#encodedText").textContent = encryptedText;
  }
  
  //Called if rotation is negative
  function negativeEncryption() {
  //iterating over each letter of the user text array
  for (let i = 0; i < userTextArr.length; i++) {
    const letterUserTxt = userTextArr[i];
    if (letterUserTxt === " " || letterUserTxt === ".") {
      // encryptedLetter = letterUserTxt;
      encryptionArr.push(letterUserTxt);
    }
    
    //iterating over each letter in the alphabet and checking if it is equal to the given iterated letter of the user text
    for (let j = 0; j < alphabetArr.length; j++) {
      const letterAlphabet = alphabetArr[j];
      let calibrationNum = alphabetArr.length;
      
      //checking if rotationNum pushes letterUserTxt out of alphabetArr range and pushing encryption
      if (letterUserTxt === letterAlphabet && j + rotationNum < 0) {
        calibrationNum = calibrationNum - Math.abs(j + rotationNum);
        encryptedLetter = alphabetArr[calibrationNum];
        encryptionArr.push(encryptedLetter);
        console.log("neg caliNum used")
      } else if (letterUserTxt === letterAlphabet) {
        encryptedLetter = alphabetArr[j + rotationNum];
        encryptionArr.push(encryptedLetter);
        console.log("neg caliNum NOT used")
      }
    }
  }
  
  //sending encrypted text to "#encodedText"
  encryptedText = encryptionArr.join(``);
  document.querySelector("#encodedText").textContent = encryptedText;
}

}
