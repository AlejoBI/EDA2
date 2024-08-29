/* 
2.	Modificar el algoritmo de árboles binarios, implementar una función para calcular la altura de un árbol.
*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Calcular la altura del árbol
    height(node = this.root) {
        if (node === null) {
            return 0;
        } else {
            const leftHeight = this.height(node.left);
            const rightHeight = this.height(node.right);
            return Math.max(leftHeight, rightHeight) + 1; // Suma 1 para contar el nodo actual
        }
    }
}

// Ejemplo de uso:
const tree = new BinaryTree();
console.log("Generando arbol binario");
tree.insert(20);
tree.insert(10);
tree.insert(22);
tree.insert(5);
tree.insert(15);
tree.insert(23);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(17);
tree.insert(24);
console.log("Altura del árbol: ", tree.height()); // Debería ser 4
