const { error } = require('console');
const fs = require('fs');

try {
    fs.writeFileSync('data/test.txt','hello shync');
} catch (e) {
    console.log(e);
}

/*
fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchronous', (err)=>{
    console.log(err);
})
*/
const data = fs.readFileSync('data/test.txt');
console.log(data.toString());