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