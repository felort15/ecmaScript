function* iterate (array){
    for (let value of array){
        yield value;
    }
}

/*const it = iterate(['Oscar','Ana','Ulises','Jennifer']);
console.log(it.next().value); // Oscar
con esta forma itera un termino a la vez  */

for (let value of iterate(['Oscar', 'Ana', 'Ulises', 'Jennifer'])) {
    console.log(value);
  }
// Con esta forma itera todos los nombres de un solo comando 