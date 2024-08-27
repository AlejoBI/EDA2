class Node {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        this.children = [];
    }
}

class FamilyTree {
    constructor() {
        this.root = null;
    }

    insert(name, birthDate, parentName = null) {
        const newNode = new Node(name, birthDate);
        if (parentName === null) {
            if (this.root === null) {
                this.root = newNode;
            } else {
                throw new Error("Root node already exists");
            }
        } else {
            const parentNode = this.findNode(this.root, parentName);
            if (!parentNode) {
                throw new Error(`Parent node with name ${parentName} not found`);
            }
            parentNode.children.push(newNode);
        }
    }

    findNode(node, name) {
        if (!node) return null;
        if (node.name === name) return node;
        for (let child of node.children) {
            const found = this.findNode(child, name);
            if (found) return found;
        }
        return null;
    }

    preOrder(node = this.root) {
        if (!node) return;

        console.log(node.name);
        node.children.forEach(child => {
            this.preOrder(child);
        });
    }

    postOrder(node = this.root) {
        if (!node) return;

        node.children.forEach(child => {
            this.postOrder(child);
        });
        console.log(node.name);
    }

    inOrder(node = this.root) {
        if (!node) return;

        if (node.children.length > 1) {
            this.inOrder(node.children[0]);
        }
        console.log(node.name);
        if (node.children.length > 1) {
            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

// Test
const familyTree = new FamilyTree();
console.log(familyTree, "Before Insert");
familyTree.insert('A', '01-01-1990');
familyTree.insert('B', '01-01-1991', 'A');
familyTree.insert('C', '01-01-1992', 'A');
familyTree.insert('D', '01-01-1993', 'B');
console.log(familyTree, "After Insert");

console.log("PreOrder ---");
familyTree.preOrder();
console.log("PostOrder ---");
familyTree.postOrder();
console.log("InOrder ---");
familyTree.inOrder();