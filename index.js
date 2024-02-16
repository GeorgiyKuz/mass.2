const printDivisibleByThree = (arr) => {
    arr.forEach((element, index) => {
        if (index % 3 === 0) {
            console.log(`Index ${index}: ${element}`);
        }
    });
}

let n = 10;
let array = Array.from({length: n}, (v, i) => i);
printDivisibleByThree(array);


const printEvenNumbers = (arr) => {
    arr.filter(element => element % 2 === 0).forEach(element => {
        console.log(element);
    });
}

let m = 10;
let arra = Array.from({length: m}, (_, i) => i);
printEvenNumbers(arra);


const capitalizeFirstLetter = (words) => {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let a = ['В', 'лесу', 'родилась', 'елочка'];
let result = capitalizeFirstLetter(a);
console.log(result);


const swapFirstAndLastLetters = (sentence) => {
    return sentence.split(' ').map(word => {
        const first = word.charAt(0);
        const last = word.charAt(word.length - 1);
        return last + word.slice(1, -1) + first;
    }).join(' ');
}

let s = "В лесу родилась елочка";
let s1 = swapFirstAndLastLetters(s);
console.log(s1);


const manipulateNumbers = (numbers) => {
    const positiveNumbers = numbers.filter(num => num > 0);
    const negativeProduct = numbers.filter(num => num < 0).reduce((acc, curr) => acc * curr, 1);
    console.log("Положительные элементы:", positiveNumbers);
    console.log("Произведение отрицательных элементов:", negativeProduct);
}

let numbers = [-2, 5, 3, -4, 6, 7, -1];
manipulateNumbers(numbers);


const countInversions = (arr) => {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }
    return inversions;
}

let num = [24, 35, 29, 44, 8, 22, 4];
let resu = countInversions(num);
console.log("Число инверсий:", resu);


const checkSameHeight = (team1, team2) => {
    let sameHeight = false;
    team1.forEach(player1 => {
        team2.forEach(player2 => {
            if (player1 === player2) {
                sameHeight = true;
            }
        });
    });
    return sameHeight;
}

let teamA = [180, 185, 190, 175];
let teamB = [170, 185, 195, 180];
let res = checkSameHeight(teamA, teamB);

if (res) {
    console.log("В командах есть игроки с одинаковым ростом.");
} else {
    console.log("В командах нет игроков с одинаковым ростом.");
}


const hasDuplicate = (arr) => {
    let uniqueSet = new Set(arr);
    return uniqueSet.size !== arr.length;
}

let arr = [2, 4, 6, 3, 5, 2, 8, 9, 10, 2];
let r = hasDuplicate(arr);

if (r) {
    console.log("В массиве есть хотя бы одна пара совпадающих элементов.");
} else {
    console.log("В массиве нет пар совпадающих элементов.");
}


let matrix = [
    [3, 5, 8, 2],
    [4, 10, 12, 6],
    [15, 7, 9, 11],
    [1, 14, 13, 16]
];

let sum = matrix.flat().reduce((acc, curr) => acc + curr, 0);
console.log(sum);


let count = matrix.flat().filter(num => num < 10).length;
console.log(count);


let max = Math.max(...matrix.map(row => Math.max(...row)));
let maxIndex = matrix.map(row => row.indexOf(max)).filter(index => index !== -1);
console.log("Индексы максимального элемента:", `[${maxIndex[0]}, ${maxIndex[1]}]`);
