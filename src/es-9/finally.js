const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (false) { // Cambias a true or false dependiendo en el contexto que busques
        resolve("Hey");
      } else {
        reject("No way");
      }
    });
  };
  
  anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));