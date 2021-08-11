const helloWorld = () => {
    const hello = 'Hello World';
    console.log("🚀 ~ file: local.js ~ helloWorld ~ hello", hello);
}

helloWorld();
// console.log("🚀 ~ file: local.js ~ helloWorld ~ hello", hello);

var scope = "I am global";
const functionScope = () => {
    var scope = "I am just a local";
    const func = () => {
        return scope;
    }
    console.log("🚀 ~ file: local.js ~ scope", scope);
}
functionScope();
console.log("🚀 ~ file: local.js ~ scope", scope);
