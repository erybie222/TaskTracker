📝 Task Tracker CLI

Task Tracker CLI is a simple command-line application for managing your tasks efficiently.It allows you to add, delete, list, and update tasks directly from the terminal.

📦 Installation

Clone the repository:

git clone https://github.com/your-username/task-tracker-cli.git
cd task-tracker-cli

Ensure Node.js is installed:

node -v

If not installed, download it from nodejs.org.

🚀 Usage

Run the script using Node.js:

node index.js <command> [arguments]

Available Commands

Command

Description

Example

add

Add a new task

node index.js add "Complete homework"

delete

Delete a task by ID

node index.js delete 1

list

Show all tasks

node index.js list

list todo

Show only "todo" tasks

node index.js list todo

list done

Show completed tasks

node index.js list done

mark-in-progress

Mark a task as in-progress

node index.js mark-in-progress 2

mark-done

Mark a task as done

node index.js mark-done 3

📚 Examples

1️⃣ Adding a new task

node index.js add "Buy groceries"

Output:

✅ Task added: "Buy groceries" (ID: 1)

2️⃣ Listing all tasks

node index.js list

Output:

📌 Task List:
✅ [1] Buy groceries (Status: todo)

3️⃣ Marking a task as in-progress

node index.js mark-in-progress 1

Output:

✅ Task with ID 1 marked as "in-progress"

4️⃣ Marking a task as done

node index.js mark-done 1

Output:

✅ Task with ID 1 marked as "done"

5️⃣ Listing only completed tasks

node index.js list done

Output:

📌 Tasks with status "done":
✅ [1] Buy groceries (Status: done)

6️⃣ Deleting a task

node index.js delete 1

Output:

🗑 Task with ID 1 has been deleted!

💡 Features to Improve

✅ Edit a task description (update <id> "New description")

✅ Sort tasks by creation date

✅ Support for colored output (chalk.js)

📝 License

This project is open-source. You are free to use and modify it. 🚀

