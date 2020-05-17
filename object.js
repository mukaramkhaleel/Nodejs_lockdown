//an object in js is typically having a key value pair seperated by a : and a , 
//a fucntion can be also present in an object and this function is called without a :
//if not using function() keyword use `this`
const person = {
    name : 'MRK',
    age : 30,
    greet(){
        console.log(`greet 1 : hello ${this.name}, i hear your age is ${this.age}`)
    },
    greet2:function(){
        console.log(`greet 2: hello ${this.name}, i hear your age is ${this.age}`)
    },
    greet3:()=>{
        console.log(`greet 3: hello ${name}, i hear your age is ${age}`)
    }
};

console.log(person.greet());
console.log(person.greet2());
console.log(person.greet2());
