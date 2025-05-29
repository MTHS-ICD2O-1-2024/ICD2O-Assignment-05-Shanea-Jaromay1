// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025


// This file contains the JS functions for index.html


"use strict"


/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function reverseNumber() {
 //input
let reversed = ''
let inputNumber = document.getElementById('number-one').value.trim()


 //process
while (inputNumber.length > 0) {
  let lastDigit = inputNumber.substring(inputNumber.length - 1)
  reversed = reversed + lastDigit
  inputNumber = inputNumber.substring(0, inputNumber.length - 1)
  }


 // output
document.getElementById('answer').innerHTML = 'Your reversed number is:' + reversed + '.'
}
