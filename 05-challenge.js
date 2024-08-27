class FamilyTree {
    constructor() {
        this.root = null;
    }

    insert(name, birthDate, parentName = null) {
        const newNode = { name, birthDate, children: [] };
        if (this.root === null) {
            this.root = newNode;
        } else {
            const parent = this.findNode(this.root, parentName);
            if (parent) {
                parent.children.push(newNode);
            }
        }
    }

    findNode(node, name) {
        if (node.name === name) {
            return node;
        }
        for (let child of node.children) {
            const result = this.findNode(child, name);
            if (result) {
                return result;
            }
        }
        return null;
    }

    inOrder(node = this.root) {
        if (node === null) {
            return;
        }
        if (node.children.length > 0) {
            this.inOrder(node.children[0]); // Subárbol izquierdo
        }
        console.log(node.name); // Nodo raíz
        for (let i = 1; i < node.children.length; i++) {
            this.inOrder(node.children[i]); // Subárbol derecho
        }
    }

    preOrder(node = this.root) {
        if (node === null) {
            return;
        }
        console.log(node.name);
        for (let child of node.children) {
            this.preOrder(child);
        }
    }

    postOrder(node = this.root) {
        if (node === null) {
            return;
        }
        for (let child of node.children) {
            this.postOrder(child);
        }
        console.log(node.name);
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