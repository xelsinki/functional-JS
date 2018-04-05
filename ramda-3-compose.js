/* 
   Ramda - methods: 
   compose,
   map,
   join,
   split

Задача: Строку 'This is composition' надо разбить на слова, перевести в toLowerCase,
Потом слить, поставив между словами тире и проэнкодить encodeURIComponent
Результат: this-is-composition
*/

// Чистый JS

const toSlug = input => {
    const words = input.split(' ')
    const lowercasedWords = words.map(word => word.toLowerCase())
    const slug = lowercasedWords.join('-')
    const encodedSlug = encodeURIComponent(slug)
  
    return encodedSlug
  }
  // Результат
  console.log(toSlug('This is composition')) // this-is-composition


  // Композиция  вложенных методов чистого JS, методы идут черз точку, начиная слева
  const toSlug_2 = input => encodeURIComponent(
    input.split(' ')
      .map(str => str.toLowerCase())
      .join('-')
  )
  // Результат
  console.log(toSlug_2('This is composition')) // this-is-composition


  // Композиция используя Ramda, методы идут через запятую, начиная справа  
  const toSlugR = input => R.compose(
    encodeURIComponent,
    R.join('-'),
    R.map(R.toLower),
    R.split(' ')
  )(input)
    // Результат
    console.log(toSlugR('This is composition')) // this-is-composition

 // Так как compose уже каррированна, то аргумент можно убрать совсем
  const toSlugRamda =  R.compose(
    encodeURIComponent,
    R.join('-'),
    R.map(R.toLower),
    R.split(' ')
  )
    // Результат
    console.log(toSlugRamda('This is composition')) // this-is-composition


// Ramda - map:
var double = x => x * 2;

// Принимает массив
R.map(double, [1, 2, 3]); 
console.log(R.map(double, [1, 2, 3])) //=> [2, 4, 6]

//Принимает объект
R.map(double, {x: 1, y: 2, z: 3}); 
console.log(R.map(double, {x: 1, y: 2, z: 3})) //=> {x: 2, y: 4, z: 6}


// Join - Возвращает строку, создаваемую путем вставки разделителя между каждым элементом и конкатенацией всех элементов в одну строку.

var spacer = R.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
R.join('|', [1, 2, 3]);    //=> '1|2|3'

// split -   Разделяет строку в массив строк на основе данного разделителя.
var pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']