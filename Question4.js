let age1, age2;
age1=17;
age2=20;
let vote = (age1 > 18) 
    ? "you can vote" 
    : (age1 < 18) 
        ? "you can't vote" 
        :(age1=0) ? "invalid" :"none";

        let vote1 = (age2 > 18) 
    ? "you can vote" 
    : (age2 < 18) 
        ? "you can't vote" 
        : (age2=0) ? "invalid" :"none";
        console.log(`The number ${age1} is ${vote}.`);
        console.log(`The number ${age2} is ${vote1}.`);

