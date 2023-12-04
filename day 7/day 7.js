// let course="Afreen"
// let value="is pretty"
// let time="beautiful"
let course="   Afreen is pretty  "
// console.log(course.length); -->it cheaks the length of the full sentence including spaces
// console.log(course.trim())-->Removes whitespace from both ends of a string
// console.log(course.toUpperCase())-->Converts all characters  to uppercase
// console.log(course.toLowerCase())-->Converts all characters  to lowercase
// console.log(course.indexOf("n"))-->Returns the index of the first string in a sentence
// console.log(course.lastIndexOf("e"))-->Returns the index of the last string in a sentence with a same spelling
// console.log(course.slice(0,3))-->
// console.log(course.replace("is","so"))-->replacing  a specified string with another string
// console.log(course.charAt(3))-->Returns the character at the specified index in a string
// console.log(course.concat(value,time))//-->Concatenates two or more strings
// console.log(course.startsWith("pretty"))-->Checks if a string starts with a given string. Returns true or false
// console.log(course.endsWith("Afreen"))//-->//Checks if a string ends with a given string. Returns true or false
// console.log(course.includes("Ashfiya"))--> it cheaks the string present in a substring and returns true or false value
// console.log(course.repeat(3))--> it repeats the string

let aa=course.trimStart()//-->Removes whitespace from the beginning or end of a string.
let bb=course.trimEnd()
let cc=course.trim()
console.log(course);
console.log('course', course.length)
console.log('trimStart', aa.length)
console.log('trimEnd', bb.length)
console.log('trim', cc.length)