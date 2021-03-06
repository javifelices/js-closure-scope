const moneyBoxNoClosure = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`馃殌 ~ MoneyBox: $${saveCoins}`);
};

moneyBoxNoClosure(5);
moneyBoxNoClosure(10);


const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`馃殌 ~ MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4); // 4
myMoneyBox(6); // 10
myMoneyBox(10); // 20


const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3


/*
Si estudiamos la funci贸n papa esta tiene la declaraci贸n de la variable cantidaDeHijos y la declaraci贸n de la funci贸n crearEngendro y al final retorna la funci贸n crearEngendro,

Ahora despu茅s de la declaraci贸n de la funci贸n papa viene la l铆nea

let traigamosHijosAlMundo = papa();

Notese el PARENTESIS () de la funci贸n papa

let traigamosHijosAlMundo = papa(); // <-- este par茅ntesis indica que la funci贸n se est谩 ejecutando

este par茅ntesis indica que la funci贸n se est谩 ejecutando, es decir cada l铆nea de esa funci贸n se ejecuta una a una, y si recorremos l铆nea a l铆nea a la funci贸n tenemos
la declaraci贸n de cantidadDeHijos que vale 0
la declaraci贸n de la funci贸n crearEngendro y el retorno de esta funci贸n,

as铆 que finalmente traigamosHijosAlMundo vale lo que haya retornado la funci贸n papa que es crearEngendro (n贸tese que no se ejecuta la funci贸n crearEngendro sino que simplemente se retorna la referencia a ella)

por ende cada vez que ejecutamos

traigamosHijosAlMundo(1)

realmente estamos es llamando a la funci贸n crearEngendro con todo su 谩mbito que es la variable cantidadDeHijos con valor de 0, y a este le suma lo que se le pase por par谩metro,

En la segunda ejecuci贸n de

traigamosHijosAlMundo(1)

no se est谩 volviendo a correr todas las l铆neas de la funci贸n papa, esto ya se hizo en la asignaci贸n ( let traigamosHijosAlMundo = papa(); ), sino que realmente se est谩 volviendo a llamar a crearEngendro() la cual hab铆a modificado su variable cantidadDeHijos en la primera llamada

asi que pienso que la clave es entender que en esta asignaci贸n

let traigamosHijosAlMundo = papa();

se ejecut贸 la funci贸n pap谩 donde se declarar贸 la variable de dicha funci贸n (cantidadDeHijos) y la funci贸n que retorna (crearEngendro) UNA SOLA VEZ! lo que se ejecuta multiples veces es el la funci贸n crearEngendro

*/
