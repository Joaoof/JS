//EXERCICIO

// //console.log('Bem vindos ao starter')

// let weigth

// console.log(typeof weigth)


let student = {name : "João de Deus",
 age : 34,
 weight : 69.5, // float numero quebrado.
 isSubscried : true,
};
// Quando for adicionar dentro das chaves {} sempre se lembra dos 2 pontos (:) e vírgula ','


console.log(`${student.name} de idade ${student.age} pesa ${student.weight } kg.`)

let students = [] 

students = [
    student
]

console.log(students)

console.log(students[0])

const john = {
   name: "John",
   age: 18,
   weight: 67.5,
   isSubscried: true, 
}

students[1] = john
console.log(students)

console.log(a)
var a = 1


//REVISÃO DE ARRAY

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]
//acessar valores dentro do array
console.log(animals[0]) //eu adicionei esse porque no "console" o lion esta na posição zero, consigo visualizar atráves da ferramenta F12. E para adicionar-se a posição é necessário "[]"

/* Type conversion vs type coersion

   *Alteração de um tipo de dado a outro

 */

console. log(Number('9') + 5)

/* Strings em números*/

// let string = "123"
// console. log(Number(string))
// let number = 321
// console. log(String(number))

/* Contando caracteres e digitos */
// let word = "Paralelepipedo"
// console. log(word. length)

// let number = 123450695050
// console. log(String (number). length)


/* Casas decimais */
// let number = 382437.30939080
// console. log(number.toFixed(5).replace(".", ","));


/* Transformando letras minusculas em maiusculas*/

// let word = "joão";
// console. log(word.toUpperCase());

/* UpperCase= para maiusculas
   LowerCase= para minusculas*/

// let phrase = "Eu quero ser um progamador"
// let myArray = phrase.split(" ")
// let phraseWinthUnderscore = myArray.join("_")
// console. log(phraseWinthUnderscore)

/* Texto que contenha coisa especifica (palavra)
phrase.includes= se de fato esta palavra consta está no texto */

let phrase = "Eu quero ser um progamador, e o Amor de alguém"
console. log(phrase.includes("Amor"))

/* Criar Array com construtor */

// let myArray = new Array ['a', 'b', 'c']
// console. log(myArray)

/* Contar elementos de um Array */ 
// console.log([   "a", 
// {type: "array"}, 
// function() { return "alo"},
// ].length)

// console.log(['a','b', 'c'].length) exemplo......*/


/*Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").*/

// let word = "manipulacão"
// console.log(Array.from(word))

/* Manipulando Arrays */ 

let techs = ["html", "css", "js"]

// Adicionar um item no fim
techs.push("nodejs")
// Adicionar no começo
techs.unshift("sql")
// Remover do fim
techs.pop()
// Remover do começo
//techs.shift()
// Pegar somente alguns elementos do array
//console.log(techs.slice(1, 2))
// Remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)

/* New = também denominada como left-hand-side expression, serve para criar um novo objeto usando as funcões construtoras que temos por padrão no JS*/

// let name = new String('João')
// name.surName = "de Deus"
// let age = new Number(18)
// console.log(name.surName, age)

let date = new Date('2004-01-02')
console.log(date.__proto__)


/* OPERADORES UNÁRIOS
  typeof
  delete
  */
//  const person = {
//    name: 'João',
//    age: 18,
//  }
// delete person.age

// console.log(person)

/* OPERADORES ARITIMÉTICOS */

//MULTIPLICAÇÃO *

console.log(3.69 * 7.23)

//DIVISÃO /

console.log(98 / 54)

//SOMA +

console.log(10 + 10)

//SUBTRAÇÃO -

console.log(8 - 2)

//RESTO DE DIVISÃO %
let remainder 
remainder = 11 % 3
console.log(remainder)

// INCREMENTO ++
let increment = 0
increment++
console.log(increment)

//DECREMENTO --
let decrement = 0
console.log(decrement--)

//EXPONECIAL**

console.log(3 ** 9)

// GRUPING OPERATOR ()

// let total = (3 + 2) * 6
// console.log(total)

// matematicamente a ordem de precedncia vem primeiro, começando é claro, com a multiplicação, mas todavia caso eu queira mudar a ordem, adiciono ()

// let one = 1
// let two = 2

// igual a
//console.log( two == 1)
//console.log( one == "1")

// //diferente de !
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// OPERADORES ESTRITAMENTE IGUAL A
// console.log( one === "1");
// console.log( one === 1)

//ESTRITAMENTE DIFERENTE DE
// console.log( two !== "2" )
// console.log( two !== 2 )

// OPERADORES DE COMPARAÇÃO MAIOR E MENOR (IGUAL)

// let one = 1
// let two = 2

// //MAIOR QUE
// console.log(one > two)

// //MAIOR IGUAL A
// console.log(one >= 1)
// console.log(two >= 1)

// //MENOR QUE
// console.log(one < two)

// //MENOR IGUAL A
// console.log( one <= two)
// console.log( one <= 1)
// console.log( one <= 0);

//OPERADORES DE ATRIBUIÇÃO

//let x
// assignment
//x = 1
//console.log(x)

// addtion assignment

//x += 2

//OPERADORES LÓGICOS

// - 2 VALORES BOOLEANOS, QUANDO VEREFICADOS,
// RESULTARÁ EM VDD OU FALSO

// let pao = true
// let queijo = true

//AND &&
//console.log(pao && queijo)

// OR  !!
// console.log(pao || queijo )

//NOT !
// console.log(!pao)

//OPERADOR CONDICIONAL (Ternário)

//Exemplos
// let pao = true
// let queijo = false

// const niceBreakfast = pao || queijo ? 'Café bom' : 'Café ruim'
// console.log(niceBreakfast)

//MAIOR DE 18

// let age = 16
// const canDrive = age >= 18 ? 'can drive' : "can't drive"
// console.log(canDrive)

// OPERADOR PARA STRING

// (comparação)
//console.log( 'a' == 'a' )

//concatenação  = uniao de 2 strings
// let alpha = 'alpha'
// console.log( alpha + 'bet')

//FALSE
//false
//0
//-0
//""
//null
//undefined
//NaN


//ex;
//console.log( 0 ? 'verdadeiro' : 'falso' )

// if.....else

// let temperature = 70.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if (highTemperature) {
//    console.log( 'Febre' )

// } else if(mediumTemperature) {
//       console.log('Febre Moderada')
// } else {
//    console.log('Saudável')
// }

//SWITCH

// let expression = 'a'

// switch (expression) {
//    case 'a':
//       // Codigo
//       console.log('a')

//    case 'b':
//       //codigo para expression b
//       console.log('b')

//    default:
//       console.log('default')

// }


//throw = Lançar

function sayMyName(name = '') {
   if (name === '') {
      throw 'Nome é obrigatório'
   }

   console.log(name )

}

// try....catch
try {
   sayMyName('João')
} catch(e) {
   console.log(e)
}

console.log('após ao try/catch')

// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 100; i > 0; i--) {
   if(i === 50) {
      break;
   }

   console.log(i)

}

// while

// let i = 95656;
// while(i > 10) {
//    console.log(i)


//    i /= 95
// }

// for...of

// let name = 'João'
// let names = ['Marcos', 'Ricardo', 'Kaio']

// for(let name of names) {
//    console.log(name)
// }l

// for..in

// let person = {
//    name: 'João',
//    age: 18,
//    weight: 55.6

// }

// for(let property in person) {
//    console.log(property)
// }






//  EXERCICIOS /// CONSOLIDANDO /// 




// function getScore(score) {
//    let scoreA = score >= 90 && score <= 100
//    let scoreB = score >= 80 && score <= 89
//    let scoreC = score >= 70 && score <= 79
//    let scoreD = score >= 60 && score <= 69
//    let scoreF = score < 60 && score >= 0

//    let scoreFinal;

//    if (scoreA) {
//       scoreFinal = "A"
//    } else if (scoreB) {
//       scoreFinal = "B"
//    } else if (scoreC) {
//       scoreFinal = "C"
//    } else if (scoreD) {
//       scoreFinal = "D"
//    } else if (scoreF) {
//       scoreFinal = "F"
//    } else {
//       scoreFinal = "Nota inválidaf"
//    } 

//    return scoreFinal
// }

// console.log(getScore(100))
// console.log(getScore(50))
// console.log(getScore(80))
// console.log(getScore(65))
// console.log(getScore(80))
// console.log(getScore(60))
// console.log(getScore(60))
// console.log(getScore(70))
// console.log(getScore(34))
// console.log(getScore(178))


// CRIANDO// SISTEMA DE GASTO FAMILIAR//

// let family = {
//    incomes: [2500, 3594, 74, 55, 69],
//    expenses: [485, 596.69, 854, 11]
// }

// function sum(array) {
//    let total= 0;

//    for(let value of array) {
//       total += value
//    }

//    return total
// }

// function calculateBalance() {
//    const calculateIncomes = sum(family.incomes)
//    const calculateExpenses = sum(family.expenses)

//    const total = calculateIncomes - calculateExpenses

//    const itsOk = total >= 0

//    let balanceText = "negativo"

//    if (itsOk) {
//       balanceText = "positivo"
//       }

//       console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
// }


// calculateBalance()


// CELSIUS EM FAHRENHEIT

// C = (F - 32) * 5/9

// F = C * 9/5 + 32


//transformDegree('50F')

// function transformDegree(degree) {
//    const celsiusExists = degree.toUpperCase().includes('C')
//    const fahrenheitExists = degree.toUpperCase().includes('F')


//    //fluxo de error
//    if(!celsiusExists && !fahrenheitExists) {
//       throw new Error('Grau não identificado')
//    }


//    //fluxo ideal, F => C
//       let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
//       let formula = fahrenheit => (fahrenheit - 32) * 5/9
//       let degreeSign = 'C'



//    //fkuxo alternativo C -> F
//    if (celsiusExists) {
//       updatedDegree = Number(degree.toUpperCase().replace("C", ""));
//       formula = celsius =>  celsius * 9/5 + 32
//       degreeSign = 'F'


//    }

   

//    return formula(updatedDegree) + degreeSign

// }

// try {
//    console.log(transformDegree('10C'))
//    console.log(transformDegree('50F'))
//    //transformDegree('50Z')
// } catch (error) {
//    console.log(error.message)
//}

const booksByCategory = [
   {

      category: "Riqueza",
      books: [
         {

            title: "Os segredos da mente milionária",
            author: "T. Harv Eker",
         },
         {

            title: "O homem mais rico da Babilônia",
            author: "George S. Clason",
         },
         {
            title: "Pai Rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter",
         },
      ],  

   },
   {

      category: "Inteligência Emocional",
      books: [
         {

            title: "Você é insubstituível",
            author: "Augusto Cury"
         },
         {

            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
         },
         {

            title: "Os 7 hábitos de pessoas altamentes eficazes",
            author: "Stephen R. Covey",
         },

      ],
   },


];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory) {
   console.log('Total de livros da categoria: ', category.category)
   console.log(category.books.length)
}

function countAuthors() {
   let authors = []; 

   for(let category of booksByCategory) {
      for(let book of category.books) {
         if(authors.indexOf(book.author) == -1) {
            authors.push(book.author)
         }
      }
   }

   console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
   let books = []; 

   for(let category of booksByCategory) {
      for(let book of category.books) {
         if(book.author === author) {
            books.push(book.title)
         }
      }
   }

   console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')