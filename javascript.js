

function showPopup() {
    const popup = document.getElementById("taskPopup");
    popup.style.display = "block";
}


function hidePopup() {
    const popup = document.getElementById("taskPopup");
    popup.style.display = "none";
}


function createTask(text) {
    const taskItems = document.getElementById("taskItems");
    const taskItem = document.createElement("li");
    taskItem.textContent = text;
    taskItem.classList.add("list_item");
    taskItem.addEventListener("click", () => {
        taskItem.remove(); 
    });
    taskItems.appendChild(taskItem);
}


document.getElementById("button").addEventListener("click", showPopup);


document.getElementById("cancelTaskButton").addEventListener("click", hidePopup);


document.getElementById("createTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = ""; 
    }
    hidePopup(); 
});








  