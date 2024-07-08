let array = [1, 2, 3, 4, 5]
let newarray =[]

for (let i = array.length - 1; i >=0; i--) {            // Reverse
    newarray.push(array[i])    //copy to new array for print properly
  
}

console.log(newarray.toString())

