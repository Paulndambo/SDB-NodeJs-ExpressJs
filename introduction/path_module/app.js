const path = require('path') 


console.log(__filename)

console.log(__dirname)


console.log(path.dirname(__filename))

const extension = path.extname("./hello.txt")

console.log(extension)

const absolute = path.join(__dirname, "hello.txt")

console.log(absolute)