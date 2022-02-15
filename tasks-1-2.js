const data = require('./data.json');

const task11Result = (animals) => {
    const result = { dogs: 0, cats: 0, avgage: 0 };
    for (let i = 0; i !== animals.length; i++) {
        if (animals[i].type === 'cat') {
            result.cats++
        } else {
            result.dogs++
        }
        result.avgage += animals[i].age
    }
    result.avgage = parseInt(result.avgage / animals.length)
    return result;
};

console.log(task11Result(data)); //{dogs: 7, cats: 9, avgage: 8}

const task12Result = (animals) => {
    let result = 0;
    for (let i = 0; i !== animals.length; i++) {
        if (animals[i].type === 'dog' && animals[i].breed && animals[i].features.includes('black')) {
            result++
        }
    }
    return result;
};

console.log(task12Result(data)); //2

const task13Result = (animals) => {
    const result = [];
    for (let i = 0; i !== animals.length; i++) {
        if (animals[i].type === 'cat' && animals[i].features.includes('black')) {
            result.push(animals[i])
        }
        if (animals[i].type === 'dog' && animals[i].features.includes('white')) {
            result.push(animals[i])
        }
    }
    return result;
};

console.log(task13Result(data)); //{dogs:2, cats:3}

const task14Result = (animals) => {
    const cats = animals.filter(el => el.type === 'cat').sort((a, b) => b.age - a.age);
    const dogs = animals.filter(el => el.type === 'dog').sort((a, b) => a.age - b.age);
    const result = cats.concat(dogs);
    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    for (let i = 1; i < n; i++) {
        result *= number;
    }
    return result;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
    const result = inputArray;
    for (let i = 0; i !== result.length; i++) {
        if (Array.isArray(result[i])) {
            result.splice(i, 1, ...result[i]);
        }
    }
    return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
