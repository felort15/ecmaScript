const anotherFunction = () => {
    return new Promise((resolve, reject) => {
      if (false) {
        resolve("Hey");
      } else {
        reject("Something went wrong!");
      }
    });
  };
  
  anotherFunction()
  .then((result) => console.log(result)) // Not executed
  .catch((error) => console.error(error)) // Output: "Something went wrong!"
  .finally(() => console.log('finally'))
    
    //el parametro de true se puede cambiar a false para que de otro valor la function