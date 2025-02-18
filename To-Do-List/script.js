// Mendapatkan elemen input dan daftar tugas
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Muat tugas yang tersimpan di Local Storage saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadTasks);

// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim(); // Menghapus spasi berlebih

    if (taskText === "") {
        alert("Masukkan tugas!");
        return;
    }

    const li = createTaskElement(taskText);
    taskList.appendChild(li);

    saveTasks(); // Simpan ke Local Storage
    taskInput.value = ""; // Kosongkan input
}

// Fungsi untuk membuat elemen tugas
function createTaskElement(taskText, completed = false) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="${completed ? "completed" : ""}">${taskText}</span>
        <button class="delete-btn">Hapus</button>
    `;

    // Menandai tugas sebagai selesai jika diklik
    li.querySelector("span").addEventListener("click", function () {
        this.classList.toggle("completed");
        saveTasks();
    });

    // Menghapus tugas saat tombol "Hapus" ditekan
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    return li;
}

// Fungsi untuk menyimpan tugas ke Local Storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        const taskText = li.querySelector("span").textContent;
        const completed = li.querySelector("span").classList.contains("completed");
        tasks.push({ text: taskText, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fungsi untuk memuat tugas dari Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = createTaskElement(task.text, task.completed);
        taskList.appendChild(li);
    });
}
