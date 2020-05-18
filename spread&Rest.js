// #####  ######  ######  ####### ######       ##       ######  #######  #####  ####### 
// #     # #     # #     # #       #     #     #  #      #     # #       #     #    #    
// #       #     # #     # #       #     #      ##       #     # #       #          #    
//  #####  ######  ######  #####   #     #     ###       ######  #####    #####     #    
//       # #       #   #   #       #     #    #   # #    #   #   #             #    #    
// #     # #       #    #  #       #     #    #    #     #    #  #       #     #    #    
//  #####  #       #     # ####### ######      ###  #    #     # #######  #####     #    


//immutable pattern 
//adding a copy to original array 
//copy then edit

const hobbies = [ 'computers','cars','bikes','helecopters'];
const newHobbies = hobbies.slice();
const newHobbieszeroslice = hobbies.slice(0);
const newHobbiesoneslice = hobbies.slice(1);
const newHobbiestwoslice = hobbies.slice(2);
console.log(hobbies);
console.log(newHobbies);
console.log(newHobbieszeroslice);
console.log(newHobbiesoneslice);
console.log(newHobbiestwoslice);

//copy an array onto a new 1 so that we can have immutibility pattern 
//approach 1 

const cpyArray = [hobbies]; //[ [ 'computers', 'cars', 'bikes', 'helecopters' ] ]
console.log(cpyArray);
//we got an array with first value as the copy of the original array 
console.log(cpyArray[0]);//[ 'computers', 'cars', 'bikes', 'helecopters' ]
//this is not what we call a copy 
//we can do something like 
let copyArray =[];
for(let value=0;value < hobbies.length;value++) {
     copyArray[value] = hobbies[value];
}
console.log("copy array ",copyArray);
//better way to do it 
const copyWithSlice = [...hobbies];
console.log("copyWithSlice",copyWithSlice)
// ######  #######  #####  ####### 
// #     # #       #     #    #    
// #     # #       #          #    
// ######  #####    #####     #    
// #   #   #             #    #    
// #    #  #       #     #    #    
// #     # #######  #####     #    
//problem we want to take in as many arguments as we get and return an Array 
function argumentCollector(...args){
    return args;
} 
let value = argumentCollector(1,2,3,4);
console.log(value);

const argscollection = (args1,args2,args3) =>{
    return [args1,args2,args3]
} 
//wow works for 3
console.log("argscollection",argscollection(1,2,3));//argscollection [ 1, 2, 3 ]
//what if we have 4 arguments and we have 3 place holders 
console.log("argscollection",argscollection(1,2,3,4));//argscollection [ 1, 2, 3 ] //we are STUCK!!!!!!
//we use Rest 
const argscollectionRest = (...args) =>{
    return args
} 
console.log("argscollectionRest",argscollectionRest(1,2,3));//argscollection [ 1, 2, 3 ]
console.log("argscollectionRest",argscollectionRest(1,2,3,4));//argscollection [ 1, 2, 3,4]