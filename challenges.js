// 1. IsDrinkingAge

const age = 22

function isDrinkingAge() {
    if(age >= 21) {
        console.log('you can drink')  
    } else {
        console.log('you cannot drink')
    } 
}

const canYouDrink = isDrinkingAge()
console.log(canYouDrink)



// 2. computeAreaOfTriangle 1/2*b*h

const base = 10
const height = 5

function areaOfTriangle(base, height) {
    return (base * height) / 2
}

const triangleArea = areaOfTriangle(base, height)
console.log(triangleArea)