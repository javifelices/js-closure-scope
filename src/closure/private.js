const person = () => {
    let saveName = 'Name';
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    };
};

let newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Javi');
console.log(newPerson.getName());

const persona = () => {
    let nombre = 'Sin nombre'; // Se declara la variable con let justo en la raíz de la función para que pueda ser vista en todos los niveles interiores.
    return {
        // Se retorna un "objeto" con 2 "metodos" (funciones)
        obtenerNombre: () => {
            // método 1, que no recibe parámetros y sólo devuelve la variable nombre.
            return nombre;
        },
        definirNombre: (nuevoNombre) => {
            // método 2, que recibe un parámetro y lo asigna a la propiedad nombre definida en la raíz de este objeto.
            nombre = nuevoNombre;
        },
    };
};
const miPersona = persona(); // Define la constante miPersona y le asigna el objeto (la función) persona, recibiendo asi los 2 métodos (obtenerNombre y definirNombre).
console.log(miPersona.obtenerNombre()); // Te dará el valor por omisión que en este caso sería sin nombre.
miPersona.definirNombre('Oscar'); // Asignas un nuevo nombre por medio del método definirNombre().
console.log(miPersona.obtenerNombre()); // Te dará el nuevo valor que asignaste la línea anterior.

/*
Ahora la explicación es esta. mipersona se declara como constante porque realmente la “constante” mipersona no será modificada en lo absoluto, sino que por medio de su método “definirNombre()” se modifica sólamente una de sus propiedades, que en este caso sería “nombre”, ya que esta propiedad “nombre” no puede ser accesible de ninguna forma fuera del objeto (la función) “persona” mas que por medio de propios métodos (scope de función).
*/


const makeCounter = () => {
    let privateCounter = 0;
    const changeBy = (val) => {
        privateCounter += val;
    };
    return {
        increment: () => {
            changeBy(1);
        },
        decrement: () => {
            changeBy(-1);
        },
        value: () => {
            return privateCounter;
        }
    }
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();
console.log(Counter1.value()); /* Muestra 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* Muestra 2 */
Counter1.decrement();
console.log(Counter1.value()); /* Muestra 1 */
console.log(Counter2.value()); /* Muestra 0 */
