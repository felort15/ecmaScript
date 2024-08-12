//arrys destructuring 

let fruits = ['apple', 'Banana'];
let [a,b]= fruits;
console.log(a,b);
//console.log(a, friuts [1])
//output: apple Banana

//Objet destruturing
let userName ={userName:"oscar", age:34};
let {userName: name, age} = userName;
console.log(userName, age);
//output: { userName: 'oscar', age: 34 } 