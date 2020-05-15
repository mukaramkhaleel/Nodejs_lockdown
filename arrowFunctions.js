//new syntax to write a function we use anonymous fucntions but we drop the  function key word and we use "=>"
const name = 'MRK';
const dob = 20200515;
let age = '1 Day';

const useDataofUser =(name,dob,age)=>{
    //pure function we get all the data from the passed arguments 
    return (
    `name is ${name}
    date of birth is ${dob}
    the Age is ${age}`);

}
// few more syntax
const addOne = (a,b) => {return a+b};
//only 1 argument
const incrementBy1 = a =>a+1; 

console.log(useDataofUser(name, dob, age));
console.log(addOne(3,1));
console.log(incrementBy1(10));