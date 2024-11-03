// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("todo-list");

    // Create new list item
    const newTask = document.createElement("li");
    newTask.innerHTML = `
        ${taskText}
        <span class="remove-btn" onclick="removeTask(this)">X</span>
    `;

    taskList.appendChild(newTask);
    taskInput.value = "";  // Clear the input field
}

// Function to remove a task
function removeTask(taskElement) {
    taskElement.parentElement.remove();
}
