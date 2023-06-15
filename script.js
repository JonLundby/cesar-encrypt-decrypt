"use strict";

const alphabetStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetArr = [];
let userTextStr = "the rat is in the house";
let userTextArr = [];
let rotationNum = -4;
let encryptionArr = [];
let encryptedLetter = "";
let encryptedText = "";

window.addEventListener("load", startApp);

function startApp() {
    console.log("running");
    
    alphabetArr = alphabetStr.split("");
    userTextArr = userTextStr.split("");

    console.log(alphabetArr.length);

    for (let i = 0; i < userTextArr.length; i++) {
        const letterUserTxt = userTextArr[i];
        if (letterUserTxt === " ") {
            // encryptedLetter = letterUserTxt;
            encryptionArr.push(letterUserTxt);
        }
        
        for (let j = 0; j < alphabetArr.length; j++) {
            const letterAlphabet = alphabetArr[j];

            if (letterUserTxt === letterAlphabet) {
                encryptedLetter = alphabetArr[(j + rotationNum)]
                console.log(encryptedLetter);
                encryptionArr.push(encryptedLetter);
            }

        }

    }

    
    encryptedText = encryptionArr.join(``);
    console.log(encryptedText)
} 