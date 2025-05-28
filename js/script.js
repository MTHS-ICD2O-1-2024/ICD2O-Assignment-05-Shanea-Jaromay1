// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function reverseNumber () {
  //input 
  let counter = 0;
  let answer = 0;
  const numberOne = parseFloat(document.getElementById('number-one').value)

  //process
  if (counter < numberOne ) {
    counter ++;
    answer = numberOne;
  }

  // output
  document.getElementById('answer').innerHTML = 'Your answer is:' + answer + '.'
}
