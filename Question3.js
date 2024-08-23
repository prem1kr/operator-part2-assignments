let numbers = 10;
let numbers1=-1;
let numbers2=0;
let results = (numbers > 0) 
    ? "positive" 
    : (numbers < 0) 
        ? "negative" 
        : "zero";

        let results1 = (numbers1 > 0) 
    ? "positive" 
    : (numbers1 <0) 
        ? "negative" 
        : "zero";

        let results2 = (numbers2 > 0) 
    ? "positive" 
    : (numbers2 < 0) 
        ? "negative" 
        : "zero";


console.log(`The number ${numbers} is ${results}.`);
console.log(`The number ${numbers1} is ${results1}.`);
console.log(`The number ${numbers2} is ${results2}.`);