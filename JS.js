// Первое задание 

let x = prompt('Введите любое число');
x = +x;  //число ли 
if( typeof x != 'number'){
alert('Упс, кажется, вы ошиблись'); // если не число
} else if(isNaN(x)){
    alert('Упс, кажется, вы ошиблись'); // проверка isNan
} else if (x % 2 ===  0){
    alert('Вы ввели четное число'); // деление на 2 без остатка
} else{ 
    alert('Вы ввели нечетное число'); // нечетное 
}

// Второе задание 

let a = prompt('Введите значение a');
if(a === "false" || a === "true"){
    console.log( a + "- логический тип ")
} else if(typeof +a === "number" && !isNaN(a)){
    console.log( a + "- number")
} else if(typeof a ==='string'){
    console.log( a + "- string")
} else { console.log("Тип неопределен")}



// Третье задание 

reverseString("Hello"); // заданая строка 
function reverseString(str) {
    return str.split("").reverse().join(""); // split - разбивает строку на элементы, reverse- переворачивает ее, join - соединяет в строку все элементы 

}

// Четвертое задание 

let x = (Math.floor(Math.random()*100)+1);
console.log(x);

// Пятое задание

let arr = ['string', 123,'null',156,69];
arr.shift();
arr.unshift('клубника');
arr.pop();
arr.push('манго');
console.log(arr);

// шестое задание

let arr=[1,0,1,1,1,1,1,1,1];
const result = el => el=el;
if(arr.every(result)){
console.log(true);
} else {console.log(false);}

// Седьмое задание
let zero=0;
let zero1=1;
let str=0;
let countable=0;
let uncountable=0;

let arr=[0,1,2,3,4,5,6,7,8,9,10, null,'dog','cat','house']
for(let i=0; i<arr.length, i++){
    if( typeof (arr[i]) =='string') {
        str++
    } else if( typeof (arr(i) === null) {
        zero1++
    } else if( typeof (arr(i) === 0) {
        zero++
    } else if( arr(i)%2===0) {
        countable++
    } else {uncountable++}

}

console.log('Нулей в массиве' + zero);
console.log('Нуллов в массиве' + zero1);
console.log('Строк в массиве' + str);
console.log('Четных  в массиве' + countable);
console.log('Нечетных  в массиве' + uncountable);


// Восьмое задание

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
console.log(map);

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
for(let name01 of map.keys()){
console.log(name01)}

let map = new Map();
map.set('01','strawberry');
map.set('02','mango');
map.set('03','blueberry');
for(let name02 of map.values()){
console.log(name02)}
