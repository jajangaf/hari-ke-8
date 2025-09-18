const fs = require('fs');
const readln = require('readline');

// buat interface readline
const rl = readln.createInterface({
    input: process.stdin,
    output: process.stdout
});

// membuat folder data jika belum ada
const dirpath = './data';
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

// membuat file contacts.json jika belum ada
const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

// input data
rl.question('Masukan Nama Anda : ', (nama) => {
    rl.question('Masukan No HP : ', (nohp) => {
        rl.question('Masukan Alamat Anda : ', (alamat) => {
            rl.question('Masukan Hobi Anda : ', (hobi) => {
                
                const contact = { nama, nohp, alamat, hobi };
                
                // baca file
                const file = fs.readFileSync(datapath, 'utf-8');
                const contacts = JSON.parse(file);
                
                // tambah data baru
                contacts.push(contact);
                
                // tulis kembali ke file
                fs.writeFileSync(datapath, JSON.stringify(contacts, null, 2));
                
                console.log('Nuhun!');
                rl.close();
            });
        });
    });
});
