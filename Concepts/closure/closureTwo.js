/*
function x(){
    for(var i =1; i<=6; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log("Hello world")
}
x()
*/

function x(){
    for(let i =1; i<=6; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
    console.log("Hello world")
}
x()
