//ES6... Not yet supported by Node
//import validator from 'validator';

const validator = require('validator')
const notes = require('./notes.js')


const note = notes('This is a note')
console.log(note)

console.log(validator.isEmail('roger@example.com'))
console.log(validator.isEmail('roger@example.'))
console.log(validator.isEmail('rogerexample.com'))

console.log(validator.isURL('https://something.com'))

//old
// const add = require('./util.js')node
// const notes = require('./notes.js')

// const sum = add(4, 2)

// console.log(sum)

// const note = notes('This is a note')
// console.log(note)



// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// fs.appendFileSync('notes.txt', 'Newer Message')
// console.log("Newer message added")