// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

function writeFile() {
    fs.writeFile('a.txt','Hello another world lol',function(err,data) {
        console.log(data)
    })
}

writeFile()