/* 
    Ramda - methods: 
    append, 
    find,
    propEq

*/

// append - Добавляет один элемент в конец массива
const ar = [1, 2, 3]

const newAr = R.append(4, ar)

console.log(ar) // [1, 2, 3]

console.log(newAr) // [1, 2, 3, 4]


// propEq - Ищет совпадение параметра в массиве, 
//возвращает true или false в зависимости от того, равняется ли поле обьекта указанному значению или нет.

const users = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Alex'
    },
    {
      id: 3,
      name: 'Bill'
    }
  ]
  // Чистый JS
  const john = users.find(user => user.id === 1)
  console.log( john) // {id: 1, name: "John"}

  // Ramda -  метод propEq, который возвращает true или false в зависимости от того, равняется ли поле обьекта указанному значению или нет
  R.propEq('id', 2, {id: 2})
  console.log( R.propEq('id', 2, {id: 2})) // [true]
  

  // Ramda - find - Ищет совпадение

  const isAlex = R.propEq('id', 2)
  const alex = R.find(isAlex, users)
  console.log( alex) // {id: 2, name: "Alex"}

 
 //мы можем использовать R.propEq внутри find: find(propEq(), array)
 // Ищем из массива users где поле id равно 3
  const bill = R.find(R.propEq('id', 3), users)
  console.log( bill) // {id: 3, name: "Bill"}