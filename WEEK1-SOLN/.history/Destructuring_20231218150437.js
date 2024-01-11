/*const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
    };
    const { bread, meat } = sandwich;
    console.log(bread, meat); // dutch crunch tuna
    */

    //The code pulls bread and meat out of the object and creates local variables for them. Also, since we declared these destructed variables using let the bread and meat variables can be changed without changing the original sandwich:

    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        cheese: "swiss",
        toppings: ["lettuce", "tomato", "mustard"]
        };
        
        let { bread, meat } = sandwich;
        
        bread = "garlic";
        meat = "turkey";
        
        console.log(bread); // garlic
        console.log(meat); // turkey
        
        console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna
        
        We can also destructure incoming function arguments. Consider this function that would log a person’s name as a lord:
 
const lordify = regularPerson => {
console.log(`${regularPerson.firstname} of Canterbury`);
};
const regularPerson = {
firstname: "Bill",
lastname: "Wilson"
};
lordify(regularPerson);  // Bill of Canterbury

    