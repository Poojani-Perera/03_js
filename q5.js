let q5 = [10,20,30,40,50]


let max = q5[0]; // Initialize max to the first element of the array
        
for (let i = 1; i < q5.length; i++) {
    if (q5[i] > max) {
        max = q5[i]; // Update max if the current element is greater
    }
}
     

console.log(max)



