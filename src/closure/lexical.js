const buildCount = (i = 0) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
};

const myCount = buildCount();
myCount(); // 1
myCount(); // 2
myCount(); // 3

// Tenemos un nuevo closure, un nuevo alcance, nuevo ámbito
const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11
myOtherCount(); // 12
