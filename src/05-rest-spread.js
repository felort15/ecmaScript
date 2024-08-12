//arrys destructuring 

let fruits = ['apple', 'Banana'];
let [a,b]= fruits;
console.log(a,b);
//console.log(a, friuts [1])
//output: apple Banana

//Objet destruturing
let user ={userName:"oscar", age: 34};
let {userName, name, age} = user;
console.log(userName,user,age);
//output: { userName: 'oscar', age: 34 } 

//spread operator
let person = {
    name:'oscar',age:28,
};
let country = 'mx';
 
let data = {id: 1,...person, country};
console.log(data);

//rest

function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(10, 5, 5, 5, 5, 5,)


