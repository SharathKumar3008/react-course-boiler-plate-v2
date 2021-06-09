
/*
database.ref('expenses')
    .once('value')
    .then((snapshot)=>{
        //console.log(snapshot.val());
        const expenses = [];
        snapshot.forEach(function(childSnapshot){
            expenses.push({
                id : childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    }).catch((e)=>{
        console.log(e);
    });

const getExpenses = database.ref('expenses').on('value', (snapshot)=>{
    let expenses = [];
    snapshot.forEach((childSnapshot)=> {
        expenses.push({
            id : childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
}, (e)=>{
    console.log(e);
});*/

/*
database.ref('expenses').push({
    description : 'Rent',
    amount : 13500,
    note : 'Optional Note',
    createdAt : 1625682600000
});*/

/*
database.ref('notes/-Mbf-HAE5CsX2Ef_CJPl').update({
    body : 'Testing'
});
*/
/*
database.ref('notes').push({
    title : 'First Note',
    body: 'This is my first note'
});

database.ref('notes').push({
    title : 'Second Note',
    body: 'This is my second note'
});*/

/*
const onVisibleChange = database.ref().on('value', (snapshot)=>{
    let {name, job} = snapshot.val()
    console.log(`${name} is a ${job.title} at ${job.company}`);

}, (e)=>{
    console.log(e);
})*/
/*
database.ref()
    .once('value')
    .then((snapshot)=>{
        const value = snapshot.val();
        console.log(value);
    }).catch((e)=>{
        console.log(e);
    })
*/
/*
database.ref().set({
    name : 'SharathKumar Nallusamy',
    age : 25,
    job : {
      title : 'Software Developer',
      company : 'Google'
    },
    stressLevel :  6,
    location : {
        city : 'Karur',
        country : 'India'
    }
}).then(()=>{
    console.log('Data is saved');
}).catch((e)=>{
    console.log(e);
});

//database.ref('age').set(26);

//database.ref('location/city').set('Chennai');

database.ref('attributes').set({
    height : 200,
    weight: 80
}).then(()=>{
    console.log('Data Updated');
}).catch((e)=>{
    console.log(e);
});

database.ref().update({
    stressLevel : 9,
    'job/company' : 'Amazon',
    'location/city' : 'Chennai'
}).then(()=>{
    console.log('Updated Data');
}).catch((e)=>{
    console.log(e);
});
*/
/*
database.ref('isSingle').remove().then(()=>{
    console.log('Data is Removed')
}).catch((e)=>{
    console.log(e);
});
*/