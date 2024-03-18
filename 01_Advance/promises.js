const promiseOne = new Promise(function(resolve,reject){

    // Async Tasks are performed

    setTimeout(function(){
        console.log("Async Time is Complete")
        resolve()
    },1000)
})

promiseOne.then( function(){
    console.log("promise consumed")
})

new Promise( function(resolve,reject){
    setTimeout( function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then( function(){
    console.log("Async 2 complete")
})



const promise3 = new Promise( function(resolve,reject){
    setTimeout(function(){
        resolve(
            {
                username :"Yash",
                email: "abc@example.com"
            })
    },1000)
})

promise3.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve(
                {
                    username :"Yash",
                    password: "abc212"
                })
        }
        else{
            reject('ERROR Something Went Wrong')
        }
    },2000)
})

/*
const username = promiseFour.then( (user)=>{
    // console.log(user)
    return user.username
}).catch(function(err)
{
    console.log(err)
})


console.log(username) // will be loged as promise in pending state as it is outside asynchronous operation
*/



promiseFour.then( (user)=>{
    console.log(user)
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("Promise is Either resolved or Rejected")
})


const promiseFive = new Promise( function(resolve,reject)
{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(
                {
                    username :"Js",
                    password: "abcp5"
                })
        }
        else{
            reject('ERROR Something Went Wrong in Js')
        }
    },2000)   
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


/*
async function fetchAllUsers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  } catch (error    ) {
    console.log(error)
  }
}

fetchAllUsers()
*/


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((response) => {
    console.log(response)
})
.catch((error) => console.log(error))