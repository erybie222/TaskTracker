import fs from "fs";
import { stringify } from "querystring";

// Fetching arguments from command line

const args = process.argv.slice(2);
const command = args[0];
const filePath = "./tasks.json";

// Checking if tasks file exists
function ensureTasksFileExists() {
  if (fs.existsSync(filePath)) {
    //console.log("The path exists.");
  } else {
    console.log("The path doesn't exists.");
    // Creating tasks.json as a empty list
    fs.writeFileSync(filePath, JSON.stringify([]), { encoding: "utf8" });
    console.log("taks.json created succesfully");
  }
}

// function that reads tasks.json
function loadTasks() {
  let tasks = [];
  try {
    tasks = JSON.parse(
      fs.readFileSync(filePath, { encoding: "utf8", flag: "r" })
    );
  } catch (err) {
    //console.log(err);
    tasks = [];
  }
  return tasks;
}

function saveTasks(newTask) {
  let tasks = loadTasks();
  const task = {
    id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
    description: newTask,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(task);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), {
    encoding: "utf-8",
    flag: "w",
  });
}

function deleteTasks(id) {
  let tasks = loadTasks();
  let id = Number(id);
  tasks = tasks.filter((task) => task.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), {
    encoding: "utf-8",
    flag: "w",
  });
  console.log(`Task with ID ${id} deleted successfully!`);
}

ensureTasksFileExists();
if (command === "add") {
  if (!args[1]) {
    console.log("Error: Task description is required!");
    process.exit(1);
  }
  saveTasks(args[1]);
  console.log("Task added successfully!");
} else if (command === "delete") {
  if (!args[1]) {
    console.log("Error: Id is required!");
    process.exit(1);
  }
  deleteTasks(args[1]);
}
