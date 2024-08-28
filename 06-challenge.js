class PersonNode {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class CityNode {
    constructor(name) {
        this.name = name;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjacencyList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjacencyList[node.name] = [];
    }

    addEdge(node1, node2) {
        this.adjacencyList[node1.name].push(node2);
        this.adjacencyList[node2.name].push(node1);
    }

    searchNode(node) {
        if (!this.nodes.length) {
            return "Graph is empty";
        }
        return this.nodes.find((n) => n.name === node) || "Node not found";
    }

    printAdjacency(node) {
        const foundNode = this.searchNode(node);
        if (foundNode === "Node not found" || foundNode === "Graph is empty") {
            return foundNode;
        }
        console.log(`Adjacency list of ${node}:`, this.adjacencyList[node]);
    }

    personInCity(city) {
        let persons = this.nodes.filter((n) => n.city.name === city);
        if (!persons.length) {
            return "No persons in this city: " + city;
        }
        return persons;
    }
}

// Create graph
let graph = new Graph();

// Create city nodes
let city1 = new CityNode("New York");
let city2 = new CityNode("Los Angeles");
let city3 = new CityNode("Chicago");

// Create person nodes
let person1 = new PersonNode("John", 25, city1);
let person2 = new PersonNode("Jane", 22, city1);
let person3 = new PersonNode("Jake", 30, city2);

// Add person nodes to graph
graph.addNode(person1);
graph.addNode(person2);
graph.addNode(person3);

// Add edges to graph
graph.addEdge(person1, person2);
graph.addEdge(person2, person3);

// Print nodes
console.log("Nodes:")
console.log(graph.adjacencyList); // { John: [ Jane ], Jane: [ John, Jake ], Jake: [ Jane ] }

// Search for nodes
console.log("")
console.log("Search nodes:")
console.log(graph.searchNode("John"));
console.log(graph.searchNode("Jake"));
console.log(graph.searchNode("Alice")); // Node not found

// Print adjacency list
console.log("")
console.log("Print adjacency list:")
graph.printAdjacency("John"); // Adjacency list of John: [ PersonNode { name: 'Jane', age: 22, city: CityNode { name: 'New York' } } ]
graph.printAdjacency("Alice"); // Node not found

// Search for person in city
console.log("")
console.log("Person in city:")
console.log(graph.personInCity("New York")); // PersonNode { name: 'John', age: 25, city: CityNode { name: 'New York' } } & PersonNode { name: 'Jane', age: 22, city: CityNode { name: 'New York' } }
console.log(graph.personInCity("Los Angeles")); // PersonNode { name: 'Jake', age: 30, city: CityNode { name: 'Los Angeles' } }
console.log(graph.personInCity("Chicago")); // No person in this city