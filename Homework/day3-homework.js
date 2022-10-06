
// Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

let brick = ''
for (let i = 0; i < 5; i++) {
    brick += '#'
    console.log(brick)
}

//----------------------------------

// Extra
// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." 
// Call that function for a few different scores and log the result to make sure it works.



function assignGrade(numScore) {
    if (numScore >= 90) {
        console.log("Grade: A")
    } else if (numScore >= 80) {
        console.log("Grade: B")
    } else if (numScore >= 70) {
        console.log("Grade: C")
    } else if (numScore >= 60) {
        console.log("Grade: D")
    } else {
        console.log("Grade F")
    }
}
assignGrade(90)









