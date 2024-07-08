let q4 = [10,20,30,40,50]

let avg =0;
let sum =0;

let num = q4.length;

for (let  newval : q4) {
    sum += newval;
}
avg = sum / num;

console.log ("The average age is: " + avg);

