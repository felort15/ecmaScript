var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit= 'apple';
fruit = ' Kiwi';
console.log (fruit);

const animal = 'Dog';
animal = 'cat';
console.log(cat)
// this will give an error because we are trying to reassign a constant variable

const fruits = ()=>{
    if (true) {
    var fruit1='apple';// function scope 
    let fruit2= ' Kiwi';// block scope 
    const fruit3= 'Banana' // block scope can't be declare outside of de function
}
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
}
fruits();