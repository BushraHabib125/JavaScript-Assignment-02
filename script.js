// Question 01
let marks = [70, 80, 65, 90, 85];
let total = 0;

for(i=0; i<marks.length; i++){
    total = total + marks[i]
    console.log(total)
}

// Question 02
let arr = [12, 45, 2, 99, 34, 5]

let max = arr[0]
let min = arr[0]

for(i=1; i<arr.length; i++){
    if(arr[i]> max){
        max = arr[i]
    }

    if(arr[i]< min){
        min = arr[i]
    }
    console.log("maximum :", max)
    console.log("minimum :", min)
}

// Question 03
let names = ["Ali", "Ahmed", "Sara", "Fatima"]

let reverse = []

for(let i = names.length-1; i>=0 ;i--){
    reverse.push(names[i])
    console.log(reverse)
}

// Question 04
 let students = ["Zaid", "Hania", "Umar", "Hania", "Aiman"]
 let count = 0;
 for(i = 0; i<students.length; i++){
    if(students[i]=== "Hania"){
        count++;
    }
 }

 console.log(count)

// Question 05
let fruits = ["Apple", "Banana", "Guava"];
fruits.push("Mango")
console.log(fruits)
fruits.pop()
console.log(fruits)

// Question 06

let cities = ["Karachi", "Lahore", "Islamabad"];
cities.unshift("Quetta")
console.log(cities)
cities.shift()
console.log(cities)

// Question 07
let colors = ["Red", "Blue", "Yellow", "Green", "Black"] 
colors.splice(2,1,"White", "Purple")
console.log(colors)

// Question 08
let items = ["Pen", "Book", "Copy", "Pencil", "Eraser", "Sharpener"]

let newarr = items.slice(1,5)
console.log(newarr)
items.splice(3,2,"Marker")
console.log(items)