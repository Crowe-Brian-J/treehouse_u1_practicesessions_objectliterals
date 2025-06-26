// 1. Create an object named book using object literal syntax
// 2. Add a title property to the book object and assign it a string value
// 3. Add an author property to the book object and assign it a string value
// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published
const book = {}
book.title = 'Red Rising'
book.author = 'Pierce Brown'
book.publish_year = 2014
//Not sure if I was supposed to put them inside the object literal, so I erred on the side of caution.

/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/
for (const key in book) {
  console.log(`${key}: ${book[key]}`)
}

// 6. Run your code by typing node 1_object.js in the console below
