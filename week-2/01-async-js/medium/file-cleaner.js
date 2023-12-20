// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

function filerCleaner() {
    fs.readFile('test-file.txt','utf-8',function(err,data) {
        if (err) throw err ;
        console.log(data)

        let result = data.replace(/\s+/g,' ').trim()
        console.log(result)

        fs.writeFile('test-file.txt',result,(err) => {
            if (err) throw err;
            console.log("Edit complete")
        });

        fs.readFile('test-file.txt','utf-8',(err,data) => {
            if (err) throw err;
            console.log('File content after editing : ' + data)
        })

    })
}

filerCleaner()
