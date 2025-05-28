/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/


const laugh = function(num){
  let res = ""
  for(let i=0; i<num; i++){
    res += "ha"
  }
  return res + "!"
}
function emotion(myEmotion, myLaugh){
  console.log(`I am ${myEmotion}, ${myLaugh(2)}`)
}
emotion("happy", laugh)
