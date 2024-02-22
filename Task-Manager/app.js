// Task class
function Task(description) {
    this.description = description;
    this.completed = false;
}

// Method to mark task as completed
Task.prototype.completeTask = function() {
    this.completed = true;
};

// Method to display task in HTML
Task.prototype.render = function() {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    if (this.completed) {
        taskItem.classList.add('completed');
    }
    taskItem.innerHTML = `
                <span>${this.description}</span>
                <div class="task-actions">
                    <button onclick="toggleTaskCompletion(this)">Done</button>
                    <button onclick="deleteTask(this)">Delete</button>
                </div>
            `;
    return taskItem;
};

// Task Manager class
function TaskManager() {
    this.tasks = [];
}

// Method to add task to Task Manager
TaskManager.prototype.addTask = function(description) {
    const task = new Task(description);
    this.tasks.push(task);
    this.render();
};

// Method to delete task from Task Manager
TaskManager.prototype.deleteTask = function(index) {
    this.tasks.splice(index, 1);
    this.render();
};

// Method to toggle task completion status
TaskManager.prototype.toggleTaskCompletion = function(index) {
    this.tasks[index].completeTask();
    this.render();
};

// Method to render tasks in HTML
TaskManager.prototype.render = function() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    this.tasks.forEach((task, index) => {
        const taskItem = task.render();
        taskList.appendChild(taskItem);
    });
};

// Global variables
const taskManager = new TaskManager();

// Function to add task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value.trim();
    if (description !== '') {
        taskManager.addTask(description);
        taskInput.value = '';
    }
}

// Function to delete task
function deleteTask(button) {
    const taskIndex = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);
    taskManager.deleteTask(taskIndex);
}

// Function to toggle task completion
function toggleTaskCompletion(button) {
    const taskIndex = Array.from(button.parentNode.parentNode.parentNode.children).indexOf(button.parentNode.parentNode);
    taskManager.toggleTaskCompletion(taskIndex);
}