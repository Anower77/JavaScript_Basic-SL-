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
















