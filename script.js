let totalTasks = 0;
let completedTasks = 0;

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (!text) return;

  if (totalTasks === 0) {
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("addCard").classList.add("move-down");
  }

  totalTasks++;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <button>Done</button>
  `;

  li.querySelector("button").onclick = () => completeTask(li, text);

  document.getElementById("todoList").appendChild(li);
  input.value = "";
  updateProgress();
}

function completeTask(taskElement, text) {
  completedTasks++;

  taskElement.remove();

  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span>`;
  document.getElementById("completedList").appendChild(li);

  updateProgress();
}

function updateProgress() {
  const percent = Math.round((completedTasks / totalTasks) * 100);
  const offset = 314 - (314 * percent) / 100;

  document.getElementById("progressCircle").style.strokeDashoffset = offset;
  document.getElementById("progressText").innerText = percent + "%";
}
