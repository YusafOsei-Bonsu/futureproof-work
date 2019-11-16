$(function() {
    

    // fetch(`https://source.unsplash.com/1600x900/?random`).then((response) => {
    // let picture1 = `<img width="400px" height="400px" src="${response.url}" alt="random image from unsplash">`; 
    // //console.log(picture1); 
    // $('.image1').append(picture1);
    // });

    // fetch(`https://source.unsplash.com/1600x900/?alternative`).then((response) => {
    // let picture2 = `<img width="400px" height="400px" src="${response.url}" alt="random image from unsplash">`; 
    // //console.log(picture1); 
    // $('.image2').append(picture2);
    // });

    let promise1 = new Promise((resolve, reject) => {
        return fetch(`https://source.unsplash.com/1600x900/?alternative`).then(response => {
          if (response.ok) {
            resolve(response)
          } else {
            reject(new Error('error'))
          }
        }, error => {
          reject(new Error(error.message))
        });
      });

      let promise2 = new Promise((resolve, reject) => {
        return fetch(`https://source.unsplash.com/1600x900/?random`).then(response => {
          if (response.ok) {
            resolve(response)
          } else {
            reject(new Error('error'))
          }
        }, error => {
          reject(new Error(error.message))
        });
      });

      const successHandler = (response) => {
            let picture1 = `<img width="400px" height="400px" src="${response.url}" alt="random image from unsplash">`; 
            console.log(picture1); 
            $('.image1').append(picture1);
      }

      const successHandler2 = (response) => {
        let picture2 = `<img width="400px" height="400px" src="${response.url}" alt="random image from unsplash">`; 
        //console.log(picture1); 
        $('.image2').append(picture2);
      }

      promise1.then(successHandler);
      promise2.then(successHandler2)

    //   async function addAsync() {
    //      const a = await promise1.then(successHandler);
    //      successHandler(a);
    //     const b = await promise2.then(successHandler2);
    //      successHandler2(b); 
    //      return a, b;     
        
    //     }

        
      addAsync();
});