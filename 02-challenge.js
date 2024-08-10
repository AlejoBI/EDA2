class Tasks {
    constructor( title,  description, next = null) {
        this.title = title;
        this.description = description;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(title, description) {
        const newTask = new Tasks(title, description);
        if (!this.head) {
            this.head = newTask;
        } else {
            this.tail.next = newTask;
        }
        this.tail = newTask
    }

    peek(title, current = this.head) {
        if (!current) {
            return null
        }
        if (current.title === title) {
            return `Title: ${current.title}, Next: ${current.next?.title || "null"}`
        }
        return this.peek(title, current.next)
    }

    size(current = this.head, count = 0) {
        if (!current) {
            return count
        }
        return this.size(current.next, count + 1)
    }

    remove(title, current = this.head) {
        if (!current) {
            return null
        }
        if (current.title === title) {
            this.head = current.next;
            return `Title: ${current.title}, Next: ${current.next?.title || "null"}`
        }
        if (current.next && current.next.title === title) {
            const removed = current.next;
            current.next = current.next.next;
            return `Title: ${removed.title}, Next: ${removed.next?.title || "null"}`
        }
        return this.remove(title, current.next)
    }

    print () {
        let task = this.head;
        while(task) {
            console.log(`Title: ${task.title}, Next: ${task.next?.title || "null"}`);
            task = task.next;
        }
    }
}

const list = new LinkedList();
list.append("Task 1", "Description 1");
list.append("Task 2", "Description 2");
list.append("Task 3", "Description 3");
list.append("Task 4", "Description 4");
list.append("Task 5", "Description 5");

console.table(list);
console.log("Peek: " + list.peek("Task 3"));
console.log("Size: " + list.size()); 
console.log("Remove: " + list.remove("Task 3"));
console.log("List after remove:");
list.print();
