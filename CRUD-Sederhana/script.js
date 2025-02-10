// Array untuk menyimpan data
let data = [];

// Mendapatkan elemen form dan tabel
const form = document.getElementById('crudForm');
const tableBody = document.querySelector('#dataTable tbody');

// Fungsi untuk menampilkan data ke dalam tabel
function renderTable() {
    tableBody.innerHTML = ''; // Mengosongkan tabel sebelum mengisi ulang
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td class="actions">
                <button class="edit" onclick="editData(${index})">Edit</button>
                <button class="delete" onclick="deleteData(${index})">Hapus</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambahkan data
function addData(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Mendapatkan nilai dari input
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Menambahkan data ke array
    data.push({ name, age });

    // Merender ulang tabel
    renderTable();

    // Mengosongkan form
    form.reset();
}

// Fungsi untuk mengedit data
function editData(index) {
    // Mengisi form dengan data yang akan diedit
    document.getElementById('name').value = data[index].name;
    document.getElementById('age').value = data[index].age;

    // Menghapus data lama dari array
    data.splice(index, 1);

    // Merender ulang tabel
    renderTable();
}

// Fungsi untuk menghapus data
function deleteData(index) {
    // Menghapus data dari array
    data.splice(index, 1);

    // Merender ulang tabel
    renderTable();
}

// Menambahkan event listener untuk form submit
form.addEventListener('submit', addData);

// Merender tabel pertama kali
renderTable();