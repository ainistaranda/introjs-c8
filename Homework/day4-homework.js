// 1. Write a loop that outputs
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLAST OFF!




// for (let i = 10; i >= 1; i--) {
//   console.log(i)
//   if (i === 1)
//     console.log('BLAST OFF!')
// }



// THEN if you're done. Create a function where I can tell 
// it any number I want to start with (instead of 10)

const firstNum = 10
function startWith() {
  for (let i = firstNum; i >= 1; i--) {
    console.log(i)
    if (i === 1)
      console.log('BLAST OFF!')
  }
}

startWith()