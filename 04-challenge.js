class ATM {
    constructor(name, time) {
        this.name = name;
        this.time = time;
        this.people = [];
    }

    enqueue(name, time) {
        const newPerson = new ATM(name, time);
        this.people.push(newPerson);
        return `Person "${name}" added`
    }

    peek() {
        const person = this.people[0];
        return person ? `Name: ${person.name}, Time: ${person.time}` : "Person not found"
    }

    dequeue() {
        const person = this.people.shift();
        return `Person ${person.name} removed`
    }

    size() {
        return this.people.length
    }

    isEmpty() {
        return this.people.length === 0
    }

    print() {
        this.people.forEach(person => {
            console.log(`Name: ${person.name}, Time: ${person.time}`)
        })
    }
}

const bank = new ATM();
console.log("Enqueue:")
console.log(bank.enqueue("John", 5))
console.log(bank.enqueue("Jane", 10))
console.log(bank.enqueue("Jim", 15))
console.log("Peek:")
console.log(bank.peek())
console.log("Dequeue:")
console.log(bank.dequeue())
console.log("Size:")
console.log(bank.size())
console.log("Is Empty:")
console.log(bank.isEmpty())
console.log("Print People:")
bank.print()