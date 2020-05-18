// ######                                                                               
// #     # ######        ####  ##### #####  #    #  ####  ##### #    # #####  ######    
// #     # #            #        #   #    # #    # #    #   #   #    # #    # #         
// #     # #####  #####  ####    #   #    # #    # #        #   #    # #    # #####     
// #     # #                 #   #   #####  #    # #        #   #    # #####  #         
// #     # #            #    #   #   #   #  #    # #    #   #   #    # #   #  #         
// ######  ######        ####    #   #    #  ####   ####    #    ####  #    # ######    
                                                                                     
// #######                                        ##          #                               
// #     # #####       # ######  ####  #####     #  #        # #   #####  #####    ##   #   # 
// #     # #    #      # #      #    #   #        ##        #   #  #    # #    #  #  #   # #  
// #     # #####       # #####  #        #       ###       #     # #    # #    # #    #   #   
// #     # #    #      # #      #        #      #   # #    ####### #####  #####  ######   #   
// #     # #    # #    # #      #    #   #      #    #     #     # #   #  #   #  #    #   #   
// ####### #####   ####  ######  ####    #       ###  #    #     # #    # #    # #    #   #   
                                                                                           
const hobbies = [ 'computers','cars','bikes'];
const person = {
    name : 'MRK',
    age : 30,
    greet(){
        console.log(`greet 1 : hello ${this.name}, i hear your age is ${this.age}`)
    }
};

console.log(person.greet());
//imagine we need only 1 value from an object we can do
console.log(person.name);
//destructure way for an object
const destructureName = ({name,age}) => {
    //the name needs to be the same as the key name in the object 
    console.log("fromdestructureName", name,age);
}
destructureName(person);
//destructure way for an array 
const [name1,age1] = hobbies;
console.log("array de structuring ",name1);//array de structuring  computers
console.log("array de structuring ",age1);////array de structuring  cars
const [hobby1,hobby2] = hobbies;
console.log("array de structuring ",hobby1);//array de structuring  computers
console.log("array de structuring ",hobby2);//array de structuring  cars
console.log("typeof(hobby1)",typeof(hobby1));//string
console.log("Array.isArray(hobbies)",Array.isArray(hobbies));//true
console.log("Array.isArray(hobby1)",Array.isArray(hobby1));//false