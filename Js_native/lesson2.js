// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// // console.log('hello')
// //создание нового массива
// const names = [];
// //перебераем исходный массив
// for (let i = 0; i < students.length; i++) {
//     //выполняем преоброзование исходного массива
//     const result = students[i].name
//     // результат преоброзование помещаем в новый массив
//     names[i] = result
// }
// // console.log(names)
//
//
// const sts = [];
//
// for (let i = 0; i < students.length; i++) {
//     //выполняем преоброзование исходного массива
//     const result = {...students[i], scores: students[i].scores + 10}
//     // результат преоброзование помещаем в новый массив
//     sts[i] = result
// }
// console.log(sts);
//
// const myMap = (arraySrc, mapFn) => {
//     const arrayResult = []
//     for (let i = 0; i < arraySrc.length; i++) {
//         const result = mapFn(arraySrc[i])
//
//         arrayResult[i] = result
//     }
//     return arrayResult;
// }
//
// console.log(myMap(students, s => s.name))
// console.log(myMap(students, s => ({...s, scores: s.scores + 10})))
//
// console.log(students.map(s => s.name))
// console.log(students.map(s => ({...s, scores: s.scores + 10})))
//
//
// function myMapMethod(mapFn) {
//     const arrayResult = []
//     for (let i = 0; i < this.length; i++) {
//         const result = mapFn(this[i])
//
//         arrayResult[i] = result
//     }
//     return arrayResult;
// }
//
// Array.prototype.myMap = myMapMethod;
// console.log(students.myMap(s => s.name))
//
// //filter-----------------------
//
// const myFilter = (arraySrc, filterFn) => {
//     const arrayResult = []
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (filterFn(arraySrc[i])) {
//             arrayResult.push(arraySrc[i])
//         }
//     }
//
//     return arrayResult;
// }
//
// console.log(myFilter(students, s => s.scores < 100))
// console.log(students.filter(s => s.scores < 100))
//
//
// //find
//
// const myFind = (arraySrc, findFn) => {
//     for (let i = 0; i < arraySrc.length; i++) {
//         if (findFn(arraySrc[i])) {
//             return arraySrc[i]
//             break
//         }
//     }
// }
//
// // Переписать любой метод масивов asd
