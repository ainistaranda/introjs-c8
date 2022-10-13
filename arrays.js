const fruits = [

'Banana',  // 0
'Berry',   // 1
'Apple',   // 2
'Mango',   // 3 
'Kiwi'     // 4
]

console.log('My fruits are:', fruits)
// // console.log('The first fruit is:', fruits[0])
// // console.log('The second fruit is:', fruits[2])

// // return the fruit at position x from the array
// function getFruit(index) {
//     return fruits[index];
// }
// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(0))
// console.log(getFruit(1))
// console.log(getFruit(2))
// console.log(getFruit(3))
// console.log(getFruit(4))

// let playersNumbers = [12,33,44,55,33,99]

// console.log(playersNumbers[0] + playersNumbers[2])


let students = [

  {
    name: 'Bob',
    age: 24
  },
  {
    name: 'Jennifer',
    age: 32
  },
  {
    name: 'Lily',
    age: 55
  }
];

// const firstStudent = students[0]

// console.log(firstStudent.name)
// console.log(students[1].name)

const {name,age} = students[0]
// console.log(`First student's name is: `, name,age)
//console.log(`First student's name is: "${name}" and they are ${age} years old.`)

const sentence = 'Hello Boca Code'
// console.log(sentence.length)
const arrayOfLetters = sentence.split('')
// console.log(arrayOfLetters)
const arrayOfWords = sentence.split(' ')
// console.log(arrayOfWords)
// console.log(`There are ${arrayOfWords.length} words`)

// let fruits = [
'Banana',  // 0
'Berry',   // 1
'Apple',   // 2
'Mango',   // 3 
'Kiwi'     // 4
// ]

// console.log(fruits)
// fruits.push('Grapes') // adds to end 'added grapes'
// console.log(fruits)
// const oldFruit = fruits.pop() // removed from end 'grapes'
// console.log(oldFruit)
// console.log(fruits)

// const oldfruit2 = fruits.shift() // removes from front 'banana'
// console.log(oldfruit2)
// console.log(fruits)

// fruits.unshift('Orange')  // adds to front
// fruits.unshift('Fig')
// console.log(fruits)

// fruits = ['Tomatoes', ...fruits, 'dragon fruit'] // spread operator allows add to add at the ends
// console.log(fruits)

// console.log(fruits.indexOf('Mango'))

// console.log(` my fruits are: ${fruits.join(', ')}`)