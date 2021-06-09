console.log('Promise File');

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('This is a Reject Call');
    }, 1500)
});

console.log('before');

promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log('error: '+err);
});

console.log('after');