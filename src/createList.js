export class ToDoList {
    constructor() {
        this.items = [];
    }
}

// Create object for each to-do item
class Task extends ToDoList {
    constructor(title) {
        super();
        this.title = title;
        this.items = [];
    }
}

// Add additional basic properties of task
const addDeadline = {
    addDeadline(deadline) {
        this.deadline = deadline;
    }
}

const addNote = {
    addNote(note) {
        this.note = note;
    }
}

const addDescription = {
    addDescription(description) {
        this.description = description;
    }
}

// Priority Range from Low (1), Medium (2), High (3);
const addPriority = {
    addPriority(priority) {
        this.priority = priority;
    }
}

// Method to add / remove subtasks (Applied to Task and Subtasks);
const addItem = {
    addItem(item) {
        this.items.push(item);
    }
}

const removeItem = {
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`${item.title} removed from list.`);
        } else {
            console.log(`${item} not found.`);
        }
    }
}


const displayTask = {
    displayTask() {
        console.log(`${this.title}: ${this.description}`);
    }
}

Object.assign(ToDoList.prototype, addItem);
Object.assign(ToDoList.prototype, removeItem);

Object.assign(Task.prototype, addDeadline);
Object.assign(Task.prototype, displayTask);
Object.assign(Task.prototype, addDescription);
Object.assign(Task.prototype, addPriority);
Object.assign(Task.prototype, addNote);



class Subtask extends Task {
    constructor(title) {
        super(title);
    }
}

const projects = new ToDoList();

const readTask = new Task("Read 15 Pages");
readTask.addDescription("Part of goal to read 30 minutes each day");
readTask.addDeadline("November 31, 2024");

const openBook = new Subtask("Open book");
openBook.addDescription("Baby steps first");

const readOneWord = new Subtask("Read One Word");

const readOneLetter = new Subtask("Read One Letter");

readOneWord.addItem(readOneLetter);
readTask.addItem(openBook);
readTask.addItem(readOneWord);

projects.addItem(readTask);

export { projects };