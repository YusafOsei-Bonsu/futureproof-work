const test = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Hello world');
    }, 3000);
})

// Asynchronous promise
function tripleAfter3Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 3);
        }, 3000);
    });
}

async function addAsync(x) {
    const a = await tripleAfter3Seconds(1);
    console.log(a);
    const b = await tripleAfter3Seconds(2);
    console.log(b);
    const c = await tripleAfter3Seconds(3);
    console.log(c);
    return x + a + b + c;
}

addAsync(5).then((result) => {
    console.log(result);
})