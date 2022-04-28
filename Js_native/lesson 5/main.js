//Строки
//Метод .sort сортирует по таблице unicode 1AaБб
//Метод .sort не умеет сортировать числа сам
// console.log(names.sort())//изменяет исходни по алфавиту
const names = ['Fred', 'Alex', 'Donald', 'Bob', 'alex', '101', 'Юрий', 'игорь']
console.log([...names].sort()) //[...делаем копию массива].Сортируем массив


//Числа
//Для работы с числами нужно предеть дополнительный параметр
//Что бы работать с числами нужно передать в sort функцию сравнения
const numbers = [1000, 3, 900, 123, 123]


const compFn = (a, b) => {
    if (a > b) {
        return 999
    }
}

console.log([...numbers].sort((a, b) => a - b))
//Если положительно число, то они меняются, если отрицательное то меняются

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

//При сортировке сравниваем свойства, а перестовляем объекты
console.log([...students].sort((a, b) => a.age - b.age))
//Сортируем по имени и используем тернарник
console.log([...students].sort((a, b) => a.name < b.name ? -1 : 1))
console.log([...students].sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
console.log([...students].sort((a, b) => a.isMarried < b.isMarried ? -1 : 1))

//bubble sort

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - 1; j++) {
        if (students[j].scores > students[j + 1].scores) {
            let temp = students[j]
            students[j] = students[j + 1]
            students[j + 1] = temp
        }
    }
}



























