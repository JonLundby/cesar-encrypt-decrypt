"use strict";

const alphabetStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let alphabetArr = [];
//let userTextStr = "the rat is in the house";
//let userTextArr = [];
let rotationNum = 0;

window.addEventListener("load", startApp);

function startApp() {
  //making an alphabet array from alphabetStr
  alphabetArr = alphabetStr.split("");

  //eventlistener for encode btn.
  document.querySelector("#user-decoded-text-form").addEventListener("submit", convertText);

  //eventlistener for rotation number
  document.querySelector("#rotation-number").addEventListener("change", setRotationNum);
}

function setRotationNum(event) {
  // console.log("rotnoum called");
  const value = event.target.value;
  rotationNum = value;
  // console.log(rotationNum);
}

function convertText(event) {
  event.preventDefault();
  
  const form = event.target;
  const userTextStr = form.userText.value;
  let userTextArr = [];
  let encryptionArr = [];
  let encryptedLetter = "";
  let encryptedText = "";
  userTextArr = userTextStr.split("");

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

      //pushing encryption and checking if rotationNum pushes letterUserTxt out of alphabetArr range
      if (letterUserTxt === letterAlphabet && j - rotationNum < 0) {
        calibrationNum = calibrationNum - Math.abs(j - rotationNum);
        encryptedLetter = alphabetArr[calibrationNum];
        encryptionArr.push(encryptedLetter);
      } else if (letterUserTxt === letterAlphabet) {
        encryptedLetter = alphabetArr[j - rotationNum];
        encryptionArr.push(encryptedLetter);
      }
    }
  }

  //sending encrypted text to "#encodedText"
  encryptedText = encryptionArr.join(``);
  console.log(encryptedText);
  document.querySelector("#encodedText").textContent = encryptedText;
}
