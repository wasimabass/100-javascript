let results = {
   waseem: 90,
   ayesha: 80,
   ali: 70,
   ahmed: 60,
}

// for loop

for(let i=0; i <Object.keys(results).length; i++){
   console.log('Total Marks of ' + Object.keys(results)[i] + ' are ' + results[Object.keys(results)[i]]); 

}

// for in loop

for(let marks in results){
   console.log('total marks of '+ marks + ' is = '+  results[marks])
}

// while loop
// let age = 18;
// let yourAge = null;
// while(yourAge != age ) {
//    yourAge= prompt('Enter your age');
// }

// get a mean by comma separated numbers given in a prompt

let calc = [];
let inputs = prompt('Enter a number');
inputs = inputs.split(',');
calc.push(inputs);
let calculate = calc[0];
console.log(calculate);
// ;
let sum = null;
const mean = (calculate) => {
   
   for (let i = 0; i < calculate.length; i++) {
      sum += parseFloat(calculate[i]);
   }
   let mean = sum / calculate.length;
   return mean;
}
console.log(mean(calculate));