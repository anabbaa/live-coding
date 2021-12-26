function stepOne(userName) {
    return new Promise((resolve, reject) => {
      console.log("User data being loaded");
      if (userName == "Zain") {
        resolve("Welcome back 😊");
      } else {
        reject("Sorry IDK you");
      }
    });
  }
  
  function secondStep(response) {
    return new Promise((resolve) => {
      console.log("Still loading");
      resolve(`We have been waiting for you ${response}`);
    });
  }
  stepOne("Zain")
  .then((response) => {
         console.log("response just arrive");
         return secondStep(response);
       })
       .then((secondResponse) => {
             console.log(secondResponse);
           })
         .catch((err) => console.log(err));