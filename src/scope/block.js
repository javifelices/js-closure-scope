const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }
    console.log("🚀 ~ fruits1", fruits1);
    console.log("🚀 ~ fruits2", fruits2);
    console.log("🚀 ~ fruits3", fruits3);
}
fruits();

const fruits2 = () => {
    if (true) {
        var fruits4 = 'cherry';
        let fruits5 = 'strawberry';
        const fruits6 = 'orange';
    }
    console.log("🚀 ~ fruits4", fruits4);
    // console.log("🚀 ~ fruits5", fruits5);
    // console.log("🚀 ~ fruits6", fruits6);
}
fruits2();

const fruits3 = () => {
    if (true) {
        var fruits4 = 'cherry';
        let fruits5 = 'strawberry';
        const fruits6 = 'orange';
        console.log("🚀 ~ fruits5", fruits5);
        console.log("🚀 ~ fruits6", fruits6);
    }
    console.log("🚀 ~ fruits4", fruits4);
}
fruits3();


let x = 1;
{
    let x = 2;
    console.log("🚀 ~ line 41 ~ x", x);
}
console.log("🚀 ~ line 38 ~ x", x);

var y = 1;
{
    var y = 2;
    console.log("🚀 ~ line 47 ~ y", y);
}
console.log("🚀 ~ line 45 ~ y", y);


const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log("🚀 ~ line 54 ~ i", i);
        }, 1000);
    }
};

anotherFunction();

const anotherFunction2 = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log("🚀 ~ line 54 ~ i", i);
        }, 2000);
    }
};

anotherFunction2();
