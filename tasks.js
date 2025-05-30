// let colors= {
//     red: '#ff0000',
//     green: '#00ff00',
//     blue: '#0000ff',
//     "golden rod": '#daa520'

// }
// console.log(colors["golden rod"])

// //task2

// let car={
//     make: "Toyota",
//     model: "Corolla",
//     year: "2020"
// }

// car['passenger capacity']=5;
// console.log(car)

// //task3

// let stu= {
//     name: "Sami",
//     id: 1112,
//     physics:{
//         subject: "Hsc phy",
//         author: "Kabir singh",
//         marks: 94
//     }
// }
// console.log(stu.physics.marks)

//task4

let stu ={
    name: "Jnifer Lopez",
    id: 1158,
    age:23,
    city: "new york city",
    isSinger: true
}
let propertyCount = Object.keys(stu);
console.log(propertyCount.length)

//task5
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {
    console.log(`Key: ${key}, Value: ${myObject[key]}, Type: ${typeof myObject[key]}`);
}
