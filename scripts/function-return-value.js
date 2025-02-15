// membuat functions dengan parameter dan return value
function sayHello(namaDepan, namaBelakang){
    const say = `Hello ${namaBelakang} ${namaDepan}`;
    return say;
}

// memanggil function dan menangkap return value

const result = sayHello("John", "Doe");
document.writeln(`<p>${result}</p>`) // output: Hello Doe John

// function return value lebih dari satu
function getNilai(value){
    if(value > 100){
        hasil = "Nilai Terbesar";
    } else if(value > 80){
        hasil = "Nilai Sederhana";
    } else {
        hasil = "Nilai Rendah";
    }
    return hasil;
}
const finalNilai = getNilai(90);

document.writeln(`<p>${finalNilai}</p>`); // output: Nilai Sederhana

// Menghentikan eksekusi dengan return
// function isContains(array, cariValue){
//     for(const element of array){
//         if(element === cariValue){
//             return true;
//         }
//     }
//     return false;
// }
// console.info(isContains([1,2,3,4,5,6,7,8,9,10], 5))

// Menghentikan eksekusi dengan return iterasi
function isContains(array, cariValue){
    for(const element of array){
        console.info(`iterasi: ${element}`);
        if(element === cariValue){
            return true;
        }
    }
    return false;
}
console.info(isContains([1,2,3,45,67,43,67,27,89]));
const cari = 27;
const found = isContains(array, cari);

document.writeln(`<p>${found}</p>`); // output: Found

