class Books {
    constructor(name, ISBN, author, editorial) {
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
        this.books = [];
    }

    push(name, ISBN, author, editorial) {
        const newBook = new Books(name, ISBN, author, editorial);
        this.books.push(newBook);
        return `Book "${name}" added`
    }

    peek(ISBN) {
        const book = this.books.find(book => book.ISBN === ISBN);
        return book ? `Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}` : "Book not found"
    }

    pop() {
        return this.books.pop()
    }

    size() {
        return this.books.length
    }

    print() {
        this.books.forEach(book => {
            console.log(`Name: ${book.name}, ISBN: ${book.ISBN}, Author: ${book.author}, Editorial: ${book.editorial}`)
        })
    }
}

const library = new Books();
console.log("Push:")
console.log(library.push("The Hobbit", "978-0-395-07122-1", "J.R.R. Tolkien", "Houghton Mifflin Harcourt"))
console.log(library.push("The Fellowship of the Ring", "978-0-395-08254-1", "J.R.R. Tolkien", "Houghton Mifflin Harcourt"))
console.log(library.push("The Two Towers", "978-0-395-08256-5", "J.R.R. Tolkien", "Houghton Mifflin Harcourt"))
console.log("Peek:")
console.log(library.peek("978-0-395-07122-1"))
console.log("Pop:")
console.log(library.pop())
console.log("Size:")
console.log(library.size())
console.log("Print Books:")
library.print()