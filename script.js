// script.js
document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const category = categoryInput.value;

        if (taskText) {
            addTask(taskText, dueDate, priority, category);
            taskInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'low';
            categoryInput.value = 'work';
        }
    });

    function addTask(text, dueDate, priority, category) {
        const li = document.createElement('li');
        li.className = `task ${priority}`;
        li.innerHTML = `
            <span class="task-text">${text} (Due: ${dueDate}) [${category}]</span>
            <div class="actions">
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;

        li.querySelector('.complete').addEventListener('click', function() {
            li.classList.toggle('complete');
        });

        li.querySelector('.delete').addEventListener('click', function() {
            li.remove();
        });

        taskList.appendChild(li);
    }
});
