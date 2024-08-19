/**
 * 
 * 1) make an array as MockTask and put some tasks inside it
 * 
 * 2) create a function named fetchTasks(), which returns tasks as a promise with 1 second delay.
 * 2-1) once you start your program the tasks inside the MockTask should display with 1 sec delay
 * 
 * 3) you need to create a function named renderTasks(tasks), to show the taken tasks as list's items on screen
 * 
 * 4) you should have an input for the clients to write their tasks inside, and add them to the list (MockTask array) with addTask button next to input.
 * 
 * 5)Implement the addTask(task) function to simulate adding a task to the MockTasks. Use a Promise to represent the asynchronous operation of adding a task.
 *5-1) your data should add to the list with 0.5 second delay

 * notice:
 * Ensure that when the "Add Task" button is clicked, the new task is added to the list of tasks and rendered on the webpage.
 * Ensure the initial list of tasks is fetched and rendered when the page loads.
 */

// creating todo list with promise

// I didn't understand the demands of the question properly.

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

let MockTask = ["washing the dishes", "taking shower", "shopping"];

function fetchTasks(array) {
  return array.map((item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log(item);
        resolve(item);
      }, 1000);
    });
  });
}

fetchTasks(MockTask);
createTaskFromArray();

function renderTasks(result) {
  const newLi = document.createElement("li");
  newLi.innerText = result;
  // taskList.append(newLi);
  taskList.insertAdjacentElement("afterbegin", newLi);
}

function createTaskFromArray() {
  fetchTasks(MockTask).forEach((tasks) => {
    tasks.then((data) => {
      renderTasks(data);
    });
  });
}

function addTask() {
  if (taskInput.value !== "") {
    // MockTask.push(taskInput.value);
    MockTask.unshift(taskInput.value);
    // console.log(MockTask);
    taskInput.value = "";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // renderTasks(MockTask[MockTask.length - 1]);
        renderTasks(MockTask[0]);
      }, 0.5 * 1000);
    });
  } else {
    alert("Please write sth!");
  }
}

addTaskBtn.addEventListener("click", addTask);
