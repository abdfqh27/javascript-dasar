const taskInput = document.getElementById("taskInput");
const deadlineInput = document.getElementById("deadlineInput");
const taskList = document.getElementById("taskList");

// Load tasks saat halaman dimuat
document.addEventListener("DOMContentLoaded", loadTasks);

// Fungsi menambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;

    if (taskText === "" || deadline === "") {
        alert("Masukkan tugas dan tanggal deadline!");
        return;
    }

    const li = createTaskElement(taskText, deadline);
    taskList.appendChild(li);

    saveTasks();
    taskInput.value = "";
    deadlineInput.value = "";
}

// Fungsi membuat elemen tugas
function createTaskElement(taskText, deadline, completed = false) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task ${completed ? "completed" : ""}">${taskText}</span>
        <span class="deadline">Deadline: ${deadline}</span>
        <div class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Hapus</button>
        </div>
    `;

    // Toggle selesai tugas
    li.querySelector(".task").addEventListener("click", function () {
        this.classList.toggle("completed");
        saveTasks();
    });

    // Edit tugas
    li.querySelector(".edit-btn").addEventListener("click", function () {
        editTask(li);
    });

    // Hapus tugas
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    return li;
}

// Fungsi mengedit tugas
function editTask(li) {
    const taskTextElement = li.querySelector(".task");
    const deadlineElement = li.querySelector(".deadline");

    const newTaskText = prompt("Edit tugas:", taskTextElement.textContent);
    const newDeadline = prompt("Edit deadline (YYYY-MM-DD):", deadlineElement.textContent.replace("Deadline: ", ""));

    if (newTaskText !== null && newDeadline !== null) {
        taskTextElement.textContent = newTaskText;
        deadlineElement.textContent = `Deadline: ${newDeadline}`;
        saveTasks();
    }
}

// Fungsi menyimpan tugas ke Local Storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        const taskText = li.querySelector(".task").textContent;
        const deadline = li.querySelector(".deadline").textContent.replace("Deadline: ", "");
        const completed = li.querySelector(".task").classList.contains("completed");
        tasks.push({ text: taskText, deadline, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Fungsi memuat tugas dari Local Storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = createTaskElement(task.text, task.deadline, task.completed);
        taskList.appendChild(li);
    });
}
