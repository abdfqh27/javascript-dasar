// For dalam object
const person = {
    namaDepan : "Abdullah",
    namaTengah : "Faqih",
    namaBelakang : "Ame",
};

for (const property in person) {
    document.writeln(`<p>Property ${property} : ${person[property]}</p>`)
}

// For dalam array
const nama = ["Abdullah", "Faqih", "Ame"];

for (const index in nama){
    document.writeln(`<p>Index ${index} : ${nama[index]}</p>`);
}

//for of dalam array
const name = ["Abdullah", "Faqih", "Ame"];

for (const name of name){
    document.writeln(`<p>${name}</p>`);
}