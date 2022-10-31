# JavaScript Basic Syntax     

## console.log
```js
    let persons = [
    {Name : 'Anower', City : 'Feni', Roll : 45},
    {Name : 'Rohan', City : 'Selyt', Roll : 35},
    {Name : 'Shadat', City : 'Nepal', Roll : 57},
    {Name : 'Shanto', City : 'Bogura', Roll : 46},
    {Name : 'Nisan', City : 'Dhaka', Roll : 78}
    ]

    // console.log(persons)
    console.table(persons)
    console.warn(persons)
    console.count(persons)
    console.dir()
    console.time()
    console.timeEnd()
    console.info()
```

<br/>

## Datatype
```js
primitive

1. Number
//10, 4.5, 5, 6

2. String
'this is text' + "this is also text"

3. Boolean
true / false

4. undefined

5. null

Array

object

==========constractor==========

Boolean()
Number()
String()


Operator
Incremental
Pre Incremental - (++a) post Incremental - (a++)
assingment operator 
let a = 10
let b = 20

a += b

console.log(a)

logical operator
&& ==> true : true = true
|| ==> true : false = true
! ==> hole system always return nagetive vlaue


let a = 10
let b = 20

// console.log(a = b)//false

console.log(a == b)//false

console.log(a > b)// false

console.log(a < b)//true

console.log(a <= b)//true
console.log(a >= b)//false

console.log(a != b)//true

let a = '20'
let b = 20

console.log(a === b)

console.log(a !== b)

Bitwise Operator
&
|
~
^
<<
>>
```

<br/>

## date
```js
 let date = new Date()

 console.log(date.toDateString())
 console.log(date.toTimeString())
 console.log(date.toLocaleString())

 console.log(date.getFullYear())
 console.log(date.getMonth())
 console.log(date.getDate())
 console.log(date.getHours())
 console.log(date.getMinutes())
 console.log(date.getSeconds())
 ```

 <br/>

## Do_While_Loop
```js
 //Do while loop=======

let isRunning = false


while (isRunning){
    console.log("Anower Hossina")
}//false


do {
    console.log("Anower hossain")
}//first time it's return a true
while (isRunning)
 ```


## if_condition

```js
let a = 10
let b = 20

//if condition true false

if (a > b){
    console.log('A is greater then B')
}

if (a < b){
    console.log('B is greater then A')
}


//task find the even and odd number=====

let n = 50

// if (n % 2 == 0){
//     console.log(n + ' This is even Number')
// }

// if (n % 2 == 1){
//     console.log(n + ' This is odd Number')
// }
```


 <br/>

## else_condition
 ```js
let a = 10
let b = 20

//if condition true false

if (a > b){
    console.log('A is greater then B')
}else{
    console.log('B is greater then A')
}


//task find the even and odd number=====

let n = 50

if (n % 2 == 0){
    console.log(n + ' This is even Number')
}else{//(n % 2 == 1)
    console.log(n + ' This is odd Number')
}

 ```

 <br/>

 ## else_if_condition

 ```js
let a = 20
let b = 20

//if condition true false

if (a > b){
    console.log('A is greater then B')
}else if (a < b){
    console.log('B is greater then A')
}else{
    console.log('They both are same')
}


//task find the even and odd number=====

let n = 0

if(n == 0){
    console.log(n + ' is Zero')
}else if (n % 2 == 0){
    console.log(n + ' This is even Number')
}else{
    console.log(n + ' This is odd Number')
}
 ```

 ## Escapnotation

 ```js
// ****** Most Improtent Escape Notation

let str1 = " My name is 'Anower'"  //qutation 1st way
let str2 = " My name is \'Anower\'"//qutation 2nd way
let str3 = " My name is \tAnower"  //tab 
let str4 = " My name is \nAnower"  //new line
let str5 = " My name is \\Anower"  // back shalsh(\\)

// Extra Escape notation
let str7 = " My name is \rAnower"  // Carrage return
let str8 = " My name is \bAnower"  // Back speac


console.log(str8)
 ```

 <br/>
 
 ## Logical_Operator

 ```js
// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false =false


let a = 20
let b = 20
let c = 30
let d = 40


// (&&) logical and opetator
if (a > b && c > d){
    console.log('A is greater then B and C is greater then D')
}else{
    console.log('At least one condition is false')
}

// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false =false

// (||) logical or opetator
if (a > b || c > d){
    console.log('A is greater then B or C is greater then D')
}else{
    console.log('At least one condition is false')
}

// (!) logical isnot opetator

let check = !(a > b)

console.log(check)
 ```

 ## Math

 ```js
//Math program

console.log(Math.E)//Exponential

console.log(Math.PI)//Pia

let n = 4.589

console.log(Math.abs(n))
console.log(Math.floor(n))
console.log(Math.ceil(n))
console.log(Math.round(n))

console.log(Math.max(400, 500, 600))
console.log(Math.min(400, 500, 600))

console.log(Math.pow(2, 3))
console.log(Math.pow(5, 2))
console.log(Math.sqrt(25))
console.log(Math.sqrt(64))


//random number generate========

console.log(Math.round(Math.random() * 5 + 1))

 ```

 <br/>

 ## String

 ```js
// introduce to String

// 'string' "string"
// ['s', 't', 'r', 'i', 'n', 'g']


let str1 = 'something' // string literal
let str2 = String('something')// string constructor


// Example to string

let n = 10
let num1 = n + ''       //1st way
let num2 = n.toString() //2nd way
let num3 = String(n)    //3rd way

console.log(num3)

 ```

 <br/>

## String Comparison

```js
// string comparison
let a = 'abc'
let b = 'def'

console.log(a < b)

// laxical comparison with string comparison


console.log( 'a'  >  'Z')//output true

console.log( 'a' < 'Z')// output false
```

<br/>

## String_Length

```js
// JS String length *****Heard ways******

let str = "Anower Hossain"

let length = 0

while (true){

    if (str.charAt(length) == ""){
        break
    }else{
        length++
    }

}

console.log(length)


// JS String length *****Easy ways******
let str1 = "Sanower Hossain"

console.log(str1.length)
console.log('This is a speacial String  length method'.length)
```

<br/>

## String Method

```js
// JS String Methods=====

let a = 'I am'
let b = 'Anower Hossain'

let c = a.concat(' ', b)

// console.log(c)

// let d = c.substring(4, 11)
// console.log(d)

// console.log(c.charAt(3))

// console.log(c.startsWith('I'))
// console.log(c.endsWith("Hossain"))
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())

console.log('       Extra_Speace_Remove         '/*.trim()*/)
console.log(c.split(' '))

```

<br/>

## Switch Statement

```js
// 0- sunday, 1- monday, 3- tuesday

let date = new Date()

let today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is sunday')
        break
    case 1:
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3:
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5:
        console.log('Today is Friday')
        break
    case 6:
        console.log('Today is Saturday')
        break
    default: 
        console.log('Nor a value Number')
}


// find free and weekday for task (HW)

// switch (new Date().getDay()) {
//     case 6:
//       console.log("Today is Saturday")
//       break;
//     case 0:
//       console.log("Today is Sunday")
//       break;
//     default:
//       console.log("Looking forward to the Weekend")
//   }


// Referance to web ship =========

// let amount = 400

// switch (amount){
//     case 100:
//         console.log('That is 100')
//         break
//     case 200:
//     case 300:
//     case 400:
//         console.log('That is 200 or 300 or 400')
//         break
//     default:
//         console.log('Invalid Amount')
// }


```

<br/>

## Ternary Operator

```js
let n = 11
let str = ''

if(n % 2 == 0){
    str = "EVEN Number"
}else{
    str = "ODD Number"
}
console.log(str)

// condition ? true side : false side
let result = (n % 2 == 0) ? "EVEN" : "ODD"

console.log(result)


// 27 class must be seen==>

```

<br/>

## Variables

```js
//follow all instruction and read notes

let fullName = "Anower hossain"

console.log("This is " + fullName)
```

<br/>

## While_Loop

```js
// while loop======>

let i = 0

while (i <= 5){
    console.log(i + ". Anower Hossain")
    i++
}


//while project=====

// let isRunning = true

// while (isRunning){
    
//     let rand = Math.floor(Math.random() * 10 + 1)
//     if(rand == 10){
//         console.log("Winner Winner Chicken Dinner")
//         isRunning = false
//     }else{
//         console.log("Your have got " + rand)
//     }
// }

```

