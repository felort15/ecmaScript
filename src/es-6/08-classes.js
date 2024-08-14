//Declarando
class User {};
//instancia de una clase
//const user = new User {}''

class user {
    //metodos
  greeting () {
    return 'Hello';
  }
  }

  const gndx = new user  ();
  console.log(gndx.greeting()); //Hello
  const bebeloper = new user ();
  console.log( bebeloper.greeting()); //Hello

  //constructor
  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    uAge() {
      return this.age;
    }
  }
  
  const bebeloper1 = new User('Davis', 15);
  console.log(bebeloper1.uAge());
  console.log(bebeloper1.age = 20);
