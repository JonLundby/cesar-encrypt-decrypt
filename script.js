"use strict";

const alphabetStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetArr = [];
//let userTextStr = "the rat is in the house";
//let userTextArr = [];
let rotationNum;

window.addEventListener("load", startApp);

function startApp() {
    //making an alphabet array from alphabetStr
    alphabetArr = alphabetStr.split("");    

    //eventlistener for encode btn.
    document.querySelector("#user-text-form").addEventListener("submit", convertText);

    //eventlistener for rotation number
    document.querySelector("#rotationNumber").addEventListener("change", setRotationNum);
    
}


function setRotationNum(event) {
    console.log("rotnoum called")
    rotationNum = event.target.rotationNumber.value;
    console.log(rotationNum)
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

    for (let i = 0; i < userTextArr.length; i++) {
      const letterUserTxt = userTextArr[i];
      if (letterUserTxt === " " || letterUserTxt === ".") {
        // encryptedLetter = letterUserTxt;
        encryptionArr.push(letterUserTxt);
      }

      for (let j = 0; j < alphabetArr.length; j++) {
        const letterAlphabet = alphabetArr[j];

        if (letterUserTxt === letterAlphabet) {
          encryptedLetter = alphabetArr[j + rotationNum];
          encryptionArr.push(encryptedLetter);
        }
      }
    }

    encryptedText = encryptionArr.join(``);
    // console.log(encryptedText);
    document.querySelector("#encodedText").textContent = encryptedText;
}