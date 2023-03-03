

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(400, 'Right'))
    .then(() => movePlayer(400, 'Left'))


async function PlayerStart(){
    const firstMove = await movePlayer(100, 'Left');
    await movePlayer(100, 'Left');
    await movePlayer(100, 'Left');
}

//asycn wait is not different from promise
//promise code 
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log(data))

// the above code is represnted in the below code using asyncwait

async function FetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}