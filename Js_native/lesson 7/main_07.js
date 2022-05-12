//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// v("yo", 3, ",") => "yo,yo,yo"

const repeatString = (a, b, c) => (a + c).repeat(b) + a
console.log(repeatString('yo', 3, ' '))
console.log(repeatString('yo', 3, ','))
console.log(repeatString('yo', 1, ','))


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart('Incubator', 'inc') true
// checkStart('Incubator', 'yo') false

const checkStart = (str, sub) => str.toLowerCase().startsWith(sub.toLowerCase())
console.log(checkStart('Incubator', 'inc'))
console.log(checkStart('Incubator', 'yo'))


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, l) => `${str.slice(0, l)}...`
console.log(truncateString('Всем студентам инкубатора желаю удачи!', 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null

const getMinLengthWord = (str) => str ? str.split(' ').sort((a, b) => a.length - b.length)[0] : null
console.log(getMinLengthWord('Всем студентам инкубатора желаю удачи!'))
console.log(getMinLengthWord(''))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Стдентам Инкуатора Желаю Удачи!"

const setUpperCase = (str) => str.toLowerCase().split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
console.log(setUpperCase('всем стУдентам инкуБатора Желаю удачИ!'))


//6. Реализуйте функцию, котрая принимает параметрами две строк. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра 
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false

const isIncludes = (str, inc) => inc.toLowerCase().split('').every(el => str.toLowerCase().split('').indexOf(el) > -1);

console.log(isIncludes('Incubator', 'Cut'))
console.log(isIncludes('Incubator', 'table'))
