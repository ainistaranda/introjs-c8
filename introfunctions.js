// 1. DO SOMETHING / NO PARAMETERS

function sayHello() {
    console.log('Hello')
}

// 2. DO SOMETHING / WITH PARAMETER (S)

function greetPerson(name) {
    console.log(`Hello ${name}. Welcome!`)
} 

greetPerson('Gianna')
greetPerson('Brad')

// 3. RETURNS SOMETHING / NO PARAMETERS

function addTwoPlusTwo() {
    return 2 + 2
}

console.log(addTwoPlusTwo())

const answer = addTwoPlusTwo()
console.log('Answer:', answer)

// 4. RETURNS SOMETHING / WITH PARAMETERS 

function doubleMyNumber(number) {
    return number * 2
}

console.log(doubleMyNumber(11))

console.log('Result: ', result)

