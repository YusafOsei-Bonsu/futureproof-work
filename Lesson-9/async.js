const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

