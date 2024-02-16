const arr = [10, 30, 12, 3, 7, 6, 9];

//Выведите все элементы массива с индексами, которые делятся на 3. Количество элементов массива равно n.
const printDivisibleByThree = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 3 === 0) {
            console.log(Индекс, "${i}:", "${arr[i]}");
        }
    }
}

//Выведите все четные элементы массива. Количество элементов массива равно n.
const printEvenElements = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

//Дан массив, состоящий из слов. Замените первую букву каждого слова на заглавную. Вывести результат в виде строки.
//Например, a=['В','лесу','родилась','елочка'] -> s="В Лесу Родилась Елочка"
function capitalizeFirstLetters(arr) {
    let capitalizedArr = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let result = capitalizedArr.join(' ');
    return result;
}

const a = ['В', 'лесу', 'родилась', 'елочка'];
const result = capitalizeFirstLetters(a);
console.log(result);

