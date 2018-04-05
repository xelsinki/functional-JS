/* 
   Ramda - methods: 
   both,
   either

*/

// Чистый JS

// Проверяем родился ли person в UK, или же принял гражданство, есть ли 18 лет
const wasBornInCountry = person => person.birthCountry === 'UK'
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18

const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
const isEligibleToVote = person => isOver18(person) && isCitizen(person)

const testUser = {
  age: 20,
  birthCountry: 'UK'
}
// Может ли голосовать, возвращает TRUE/FALSE
console.log(isEligibleToVote(testUser)) // true


// Ramda вариант

// Функция both проверяет на true как && оба утверждения, возвращает TRUE/FALSE
const testBoth = R.both(value => value < 5, value => value > 0)
console.log(testBoth(3)) // true

// Функция either проверяет на true как ||, если одно из утверждений true, возвращает TRUE/FALSE
const testEither = R.either(value => value < 5, value => value > 0)
console.log(testEither(10)) // true

// Перепишем метод используя propEq
const wasBornInCountryRamda = R.propEq('birthCountry', 'UK')
// Перепишем метод используя either
const isCitizenRamda = R.either(wasBornInCountryRamda, wasNaturalized)

// isEligibleToVoteRamda - это функция, которая принимает юзера на вход и передает его в isOver18 и isCitizenRamda.
// Если обе эти функции вернут true, то isEligibleToVoteRamda вернет true
const isEligibleToVoteRamda = R.both(isOver18, isCitizenRamda)
console.log(isEligibleToVoteRamda(testUser)) // true


// Так можно создавать point free code. То есть функции без аргументов
//Point free хорош тем, что он не завязывается на конкретные аргументы и может переиспользоваться во многих местах.

// Задаем propEq с id
const idEquals = R.propEq('id')
// Вызываем ранее созданную функцию с аргументом 2 и объектом для сравнения, в котором поле id равно 2
const isJim = idEquals(2, {id: 2, name: 'Jim'})
console.log(isJim) // true

// Или же как здесь
const isFirstPost = idEquals(1, {id: 1, title: 'My first Post'})
console.log(isFirstPost) // true