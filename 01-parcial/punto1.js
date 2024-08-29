/* 
1.	Implementar una función que tenga como parámetros dos listas enlazadas de números ordenados de mayor a menor y 
que retorne una nueva lista con la unión de ambas y sus elementos ordenados de menor a mayor. 
*/

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    // Convertir la lista en un array
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    // Crear una lista desde un array de valores
    static fromArray(values) {
        const list = new LinkedList();
        for (const value of values) {
            list.append(value);
        }
        return list;
    }
}

// Función para fusionar y ordenar dos listas enlazadas
function mergeAndSortLists(list1, list2) {
    const mergedValues = [...list1.toArray(), ...list2.toArray()]; // Fusiona los valores de ambas listas
    const mergeValuesNew = mergedValues.filter((item, index) => mergedValues.indexOf(item) === index); // Elimina duplicados
    mergeValuesNew.sort((a, b) => a - b); // Ordena los valores de menor a mayor
    return LinkedList.fromArray(mergeValuesNew);
}

// Ejemplo de uso:
const list1 = LinkedList.fromArray([1, 3, 5, 7, 9, 9, 7, 5, 3, 1]);
const list2 = LinkedList.fromArray([2, 4, 6, 8, 10, 10, 8, 6, 4, 2]);
// NOTA: Como sea que le mande los numeros, el resultado final siempre sera el mismo de menor a mayor sin repetir !!!!!!

const sortedList = mergeAndSortLists(list1, list2);
console.log(sortedList.toArray());


/*  
La función filter() se utiliza en este caso para recorrer cada elemento del array y crear un nuevo array con los elementos 
que cumplan una determinada condición. En este caso, la condición es que el índice del elemento en el array sea igual al índice 
de la primera aparición del elemento en el array. Esto significa que solo se conservará la primera aparición de cada elemento y 
se eliminarán las repeticiones.

La expresión mergedValues.indexOf(item) === index se utiliza para verificar si el índice del elemento actual es igual al índice 
de la primera aparición del elemento en el array. Si es así, el elemento se conserva en el nuevo array resultante; de lo 
contrario, se descarta.
*/