/* Write a function that receives a car object as an argument and outputs 
the car's make and model. (console log your response) */

// Write a function that outputs the the second element in an array. (console log your response)


const car = {
    make: 'Honda',
    model: 'Insight',
    transmission: 'automatic'
}
function carInfo() {
    return (`The car is a ${car.make} ${car.model}.`)
}

console.log(carInfo(car))

// -----------------------------------------------------

const sports = [
    'Ice hockey',
    'Football',
    'Basketball',
    'Tennis'
]
    
function secondSport() {
    return sports[1]
}

console.log(secondSport(sports))