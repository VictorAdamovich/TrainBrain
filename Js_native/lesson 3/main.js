// // Что делает браузер когда реагирует на событие => lisstener (Функция)
// // 1. Проверяет есть ли слушатель, обработкий подисчик.
// // 2. Формирует объект со сведениями о событии. => event, ev, e (Объект).
// // 3.listener (e) => вызов обработчика с объектом (e) в качестве параметра.
//
// const sm = document.getElementById('small')
// const md = document.getElementById('medium')
// const bg = document.getElementById('big')
//
//
//
// const onClickHandler = (e) => {
//     console.dir(e.currentTarget)
// }
//
// const onClickHandlerPlus = (e) => {
//     e.stopPropagation()
//     console.dir(e.currentTarget)
// }
//
// sm.onclick = onClickHandler
// sm.onclick = null
//
// sm.addEventListener('click', onClickHandlerPlus)
// md.addEventListener('click', onClickHandlerPlus)
// bg.addEventListener('click', onClickHandlerPlus)

function spinWords(string){
    let arrayToString = string.split(' ')
    const newArry = () => {
        for (let i =0;i<arrayToString.length-1;i++){
            if(arrayToString[i].length>5){
                arrayToString[i] =arrayToString[i].split('').reverse().join()
            }
        }
    }
    return arrayToString
}
spinWords("Welcome to my home")