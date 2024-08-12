function newUser (name ,age , country){
    var name= name ||'felipe';
    var age = age|| 20;
    var country = country|| 'MX';
    console.log(name, age, country)
}
newUser();
newUser('Oscar',20,'CO');

//function mas amigable menos codigo

function newAdmin (name= 'felipe', age = 20, country = 'CL') {
    console.log(name, age, country);
}
newAdmin();
newAdmin('Oscar', 30, 'MX'); // si no se pasa un argumento
