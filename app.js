const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.addEventListener("click", () => {
          newTask.classList.toggle("completed");
        });
        newTask.addEventListener("dblclick", () => {
          taskList.removeChild(newTask);
        });
        taskList.appendChild(newTask);
        taskInput.value = "";
      }
    });
