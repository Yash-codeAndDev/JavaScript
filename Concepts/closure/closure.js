/*
, a closure is a feature that allows a function to remember and access its 
lexical scope even when that function is executed outside that lexical 
scope. In simpler terms, a closure gives you access to an outer function's 
scope from an inner function even after the outer function has finished 
executing.
closure =: function bundled with its lexical scope
*/

/*
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    y()
}
x()
*/

function z(){
    var b = 100   
    function x(){
        let a = 7
        function y(){
            console.log(a,b)
        }
        y()
    }
    x()
}
z()

















