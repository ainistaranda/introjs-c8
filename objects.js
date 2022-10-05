
const person = {

    name: 'Ainis', 
    age: 25,
    address: 'Earth'
    

}

// console.log('person is called:',person.name)
// console.log('person is called:',person['name'])
// console.log(`My name is ${person.name} and 
// I'm this old: ${person.age}`)

// const name = person.name
// const age = person.age

const {name,age} = person
console.log(`My name is ${name} and 

I'm this old: ${age}`)
