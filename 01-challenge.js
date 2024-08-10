export function oldRegularFunction(a) {
    if (a % 2 !== 0) {
        return "even"
    }
    return "odd"
}

/* Sintaxis: function nombre(parametros) { // código }
Hoisting: Las declaraciones de funciones se elevan (hoisting), lo que significa que puedes llamar a esta función antes de su declaración en el código.
this Contexto: Tiene su propio contexto this que depende de cómo se llama la función.
Uso de new: Puede ser usada como constructor y llamada con new. */

export const newRegularFunction = function(a) {
    if (a % 2 !== 0) {
        return "even"
    }
    return "odd"
}

/* Sintaxis: const nombre = function(parametros) { // código }
Hoisting: Las expresiones de función no se elevan, por lo que no puedes llamar a esta función antes de su declaración.
this Contexto: Tiene su propio contexto this que depende de cómo se llama la función.
Uso de new: Puede ser usada como constructor y llamada con new. */

export const ArrowFunction = (a) => {
    if (a % 2 !== 0) {
        return "even"
    }
    return "odd"
};

/* Sintaxis: const nombre = (parametros) => { // código }
Hoisting: Las funciones flecha no se elevan.
this Contexto: No tiene su propio this. Hereda el this del contexto en el que fue definida.
Uso de new: No puede ser usada como constructor y no puede ser llamada con new.
arguments Objeto: No tiene acceso al objeto arguments. */

/* RESUMEN: 
Declaración de Función: Elevación, propio this, puede ser constructor.
Expresión de Función: No se eleva, propio this, puede ser constructor.
Arrow Function: No se eleva, hereda this, no puede ser constructor, no tiene arguments. */