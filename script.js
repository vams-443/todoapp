function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.innerHTML = task + '<button onclick="completeTask(this)">Complete</button>' +
            '<button onclick="deleteTask(this)">Delete</button>';
        document.getElementById("pendingList").appendChild(listItem);
        input.value = "";
    }
}

// Function to mark a task as complete
function completeTask(button) {
    var listItem = button.parentNode;
    document.getElementById("completedList").appendChild(listItem);
    button.parentNode.removeChild(button);
}

// Function to delete a task
function deleteTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}