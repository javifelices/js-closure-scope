const otherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log('i', i);
        }, 1000);
    }
};

otherFunction();

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 2000);
    }
};

anotherFunction();

/*
La diferencia es el hoisting.

Cuando utilizamos var, nuestro contador se eleva hasta el ámbito léxico de la función, esto hace que nuestro contador se vea afectado por cada iteración.

Cuando utilizamos let, nuestro contador se fija al ámbito léxico del bloque for. Esto lo puedes entender cómo si existiera una variable i en cada iteración del for, variable totalmente independiente, la cual no es afectada por las demás iteraciones.


La creación del contador en un ciclo for se realiza solamente la primera vez que se evalua el ciclo for, cuando el ciclo for itera, se evalúa la condición booleana para saber si debemos seguir iterando en nuestro for, y por último se realiza la modificación del contador, independientemente si la condición booleana fue true o false.

for (contador; expresiónBooleana; modificacionDelContador)

La respuesta aquí es el hosting aplicado al contador, sacando nuestro contador del for y pasándolo al ámbito léxico de la función, esto en tiempo de compilación del JS.

Nuestro resultado de 10 en todos nuestros console.log(i) se debe a que JS solamente puede ejecutar una cosa a la vez, aplica un asincronismo al ejecutar el setTimeOut, lo cual retrasa 1 segundo cada impresión en la consola, encolando nuestros callbacks, delegando la ejecución de las tareas al event loop, mientras que el hilo principal de nuestro JS está avanzando en nuestro ciclo for. Por la velocidad de cómputo de nuestro equipo, JS acaba las iteraciones del ciclo for antes que nuestros console.log(i) puedan ejecutarse, para cuando nuestros console.log(i) están listos para ejecutarse, el valor de i es 10.

*/
