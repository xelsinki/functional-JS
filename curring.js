/*
    Curry - это готовая функция, которая подклюцаетсяк проекту
    Главная идея currying в том, чтобы писать более чистый и элегантный код.
*/

var add = function (a, b) {
    return a + b
  }
  
  var curriedAdd = curry(add)

// Curry можно вызывать и так: 
  console.log(curriedAdd(1, 2))
  // и так:
  console.log(curriedAdd(1)(2))

/*
    Проход по массиву объектов
*/

  var objects = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]

  // Выносим ID в отдельный массив

  // Чистая JavaScript function  
  var result = objects.map(function (object) {
    return object.id
  })

  console.log(result)

  /* 
  Curry

  get('id') является частично настроенной get функцией. То есть, мы указали ей первый аргумент property - id.
  Если ее вызвать без ничего, то она просто вернет функцию, так как ей передано недостаточно аргументов, чтобы она вернула результат.
  Когда мы передаем ее в map, то get функция вызывается полностью, передавая каждый object вторым аргументом.
  */

 var get = curry(function (property, object) {
    return object[property]
  })
  
 var getIds = function (objects) {
    return objects.map(get('id'))
}
console.log(getIds(objects))
 
  /* 
    каррируем метод map
    Наш каррированый метод map будет принимать функцию первым аргументом, а значения вторым аргументом.

  */

 var getCurry = curry(function (property, object) {
    return object[property]
  })
  
  var map = curry(function (fn, values) {
    return values.map(fn)
  })
  
  var getCurryIds = map(getCurry('id'))
  
  console.log(getCurryIds(objects))


  // -----------------------------------------------------------------------------------------------------

// У нас есть метод fetchFromServer, который возвращает нам промис. Но мы просто сэмулируем его

var fetchFromServer = function () {
    return new Promise(function (resolve) {
      resolve({
        user: 'Alex',
        posts: [
          {
            title: 'why curry?'
          },
          {
            title: 'functional programming'
          },
          {
            title: 'It is great!'
          },
          {
            title: 'Lorem ipsum...'
          },
          {
            title: 'Some text'
          }
        ]
      })
    })
  }

  // Как бы мы написали код на чистом javascript, чтобы получить массив title?

  fetchFromServer()
    .then(function (data) {
      return data.posts
    })
    .then(function (posts) {
      return posts.map(function (post) {
        return post.title
      })
    })
    .then(function (titles) {
      console.log('titles', titles)
    })

  // Curring с функциями map и get, которые мы создали ранее.

  // В первом then мы просто хотим получить поле из обьекта. 
  // Во втором - сделать map и получить из каждого поля title.

  fetchFromServer()
  .then(get('posts'))
  .then(map(get('title')))
  .then(function (titles) {
    console.log('titles', titles)
  })
