function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value;
  
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskText;
  
    li.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
      li.remove();
    });
  
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  