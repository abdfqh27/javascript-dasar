// Contoh 1: Penggunaan undefined
let nama; // Variabel 'nama' dideklarasikan tetapi tidak diinisialisasi, sehingga nilainya undefined

if (nama === undefined) {
    console.log("Variabel 'nama' adalah undefined."); // Pesan ini akan dicetak karena variabel 'nama' tidak memiliki nilai
} else {
    console.log(`Nama: ${nama}`);
}

// Contoh 2: Penggunaan undefined array
let buah = ["Apel", "Mangga", undefined, "Jeruk"]; // Array dengan elemen undefined

// Loop untuk mengecek setiap elemen dalam array
for (let i = 0; i < buah.length; i++) {
    if (buah[i] === undefined) {
        console.log(`Elemen ke-${i + 1} dalam array adalah undefined.`); // Pesan ini akan dicetak untuk elemen yang undefined
    } else {
        console.log(`Buah: ${buah[i]}`);
    }
}

// Contoh 3: Penggunaan object value dengan kondisi
let siswa = {
    nama: "Budi",
    umur: undefined, // Properti 'umur' diinisialisasi dengan undefined
    kelas: "12 IPA"
};

// Mengecek apakah properti 'umur' ada dan tidak undefined
if (siswa.umur === undefined) {
    console.log("Umur siswa tidak diketahui."); // Pesan ini akan dicetak karena properti 'umur' adalah undefined
} else {
    console.log(`Umur siswa: ${siswa.umur}`);
}

// Mengecek apakah properti 'alamat' ada dalam objek
if (siswa.alamat === undefined) {
    console.log("Alamat siswa tidak tersedia."); // Pesan ini akan dicetak karena properti 'alamat' tidak ada dalam objek
} else {
    console.log(`Alamat siswa: ${siswa.alamat}`);
}

// Contoh 4: Menggabungkan kondisi dengan object value
let produk = {
    nama: "Laptop",
    harga: 10000000,
    stok: undefined // Properti 'stok' diinisialisasi dengan undefined
};

// Mengecek stok produk
if (produk.stok === undefined) {
    console.log("Stok produk belum diatur."); // Pesan ini akan dicetak karena properti 'stok' adalah undefined
} else if (produk.stok > 0) {
    console.log(`Stok tersedia: ${produk.stok}`);
} else {
    console.log("Stok habis.");
}

// Contoh 5: Menangani undefined dalam fungsi
function tampilkanInfo(produk) {
    // Mengecek apakah parameter 'produk' adalah undefined
    if (produk === undefined) {
        console.log("Produk tidak ditemukan."); // Pesan ini akan dicetak jika parameter tidak diberikan
    } else {
        console.log(`Nama Produk: ${produk.nama}, Harga: ${produk.harga}`);
    }
}

// Memanggil fungsi tanpa memberikan parameter
tampilkanInfo(); // Output: "Produk tidak ditemukan."

// Memanggil fungsi dengan parameter
tampilkanInfo({ nama: "Smartphone", harga: 5000000 }); // Output: "Nama Produk: Smartphone, Harga: 5000000"