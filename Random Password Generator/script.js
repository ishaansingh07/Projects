//     File: Random Password Generator
//     Author: Ishaan Singh
//     Date: 27/11/2023

//     Description:
//     ------------
//     The functionality of the code is to generate random passwords.

//     Contact Information:
//     --------------------
//     ishaan.singh2k@gmail.com

///////////////////////////////////////////////////////////////////////////////

const passwordBox = document.getElementById("password")
const length = 10

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_-+=|?/.,<>[]{}~`";

const allChars = upperCase + lowerCase + number + symbol

function createPassword() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)] //after * the number is for defining the maximum range for math.random()
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand('copy')
}