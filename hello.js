var str1 = 'hello';
//Redeclaring the variable
var str2 = str1;
str1 = 'goodbye';
//Redeclaring the variable has separated it from its original reference
console.log(str2);//hello

var str1 = 'hello';
var printVar = function(v){
    return function(){
        console.log(v);
    };
};
//Passing in variable into a function

var printHello = printVar(str1);
str1 = 'goodbye';
//Passing the variable into a function has saved it in the function's scope
printHello();//hello
