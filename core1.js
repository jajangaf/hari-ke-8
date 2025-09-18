const readln = require('readline');
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan Nama Anda: ', (nama)=>{
    rl.question('Masukan No HP: ', (nohp)=>{
        console.log(`Terima Kasih ${nama}, sudah input ${nohp}`);
    })
})