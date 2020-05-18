//array can hold ['abc',1,{}]
//
const hobbies = [ 'computers','cars','bikes'];
for(hobby in hobbies){
    console.log(hobbies[hobby]);
}
for (let hobby of hobbies){
    console.log(hobby);
}
//a map will create a new array and will not use the original 
console.log(hobbies.map(hobby =>{
    return 'Hobby : '+hobby;
}));
//short form of a map 
console.log(hobbies.map(hobby=> 'adding something to map : ' + hobby))
console.log(hobbies)
//reference type :)
//here we see something odd hobbies is a constant but we can add a value to it 
hobbies.push("gaming");
console.log("after pushing", hobbies);
//this is odd for a constant , this is possible as hobbies Array is a reference type : 
//the pointer pointing to referance type has not changed .  