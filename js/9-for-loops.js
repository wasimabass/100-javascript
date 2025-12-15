/*
for loops
for in loops
for of loops
while loops
do while loops*/

// ========================for loop========================
// add some natural numbers using for loop

/*let sum = 0;
let n =prompt("Enter a number");
n = Number.parseInt(n);

for(let i=0; i < n; ++i){
    sum += (i+1); 
   
}
console.log('sum of firt for loop is:'+ n + 'is : 4'+ sum);*/



// ========================for in loops========================

let obj = {
    waseem: 90,
    ayesha: 80,
    ali: 70,
    ahmed: 60,
    umar: 50,
    usama: 30,
}
// for (let a in obj){
//     console.log('marks of '+ a + ' is '+ obj[a]);
// }

// ========================for of loops========================
let arr = [1, 2, 3, 4, 5];
for (let b of arr){
    console.log(b);
}

