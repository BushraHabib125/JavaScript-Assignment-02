// let numbers = [4,20,48,5,-3,63,-8,-72,90]

// for(var i = 0; i< numbers.length; i++){
//     if(numbers[i]>=0){
//         console.log(`${numbers[i]} is positive`)
//     }else{
//         console.log(`${numbers[i]} is negative`)
//     }
// }

// let names = ['Sana', 'Ayesha', 'Haniya', 'Amna']

// for( var i = 0; i< names.length; i++){
//     console.log('Good Morning', names[i])
// }

// let marks = [70, 80, 65, 90, 85];
// let total = 0;

// for(i=0; i<marks.length; i++){
//     total = total + marks[i]
//     console.log(total)
// }

// let arr = [12, 45, 2, 99, 34, 5]

// let max = arr[0]
// let min = arr[0]

// for(i=1; i<arr.length; i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }

//     if(arr[i]< min){
//         min = arr[i]
//     }
//     console.log("maximum :", max)
//     console.log("minimum :", min)
// }


// let names = ["Ali", "Ahmed", "Sara", "Fatima"]

// let reverse = []

// for(let i = names.length-1; i>=0 ;i--){
//     reverse.push(names[i])
//     console.log(reverse)
// }

//  let students = ["Zaid", "Hania", "Umar", "Hania", "Aiman"]
//  let count = 0;
//  for(i = 0; i<students.length; i++){
//     if(students[i]=== "Hania"){
//         count++;
//     }
//  }

//  console.log(count)

// let fruits = ["Apple", "Banana", "Guava"];
// fruits.push("Mango")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// let cities = ["Karachi", "Lahore", "Islamabad"];
// cities.unshift("Quetta")
// console.log(cities)
// cities.shift()
// console.log(cities)

// let colors = ["Red", "Blue", "Yellow", "Green", "Black"] 
// colors.splice(2,1,"White", "Purple")
// console.log(colors)

let items = ["Pen", "Book", "Copy", "Pencil", "Eraser", "Sharpener"]

let newarr = items.slice(1,5)
console.log(newarr)
items.splice(3,2,"Marker")
console.log(items)