/* Problem 1: 
Write a JavaScript program to generate the following pattern in the console using for loops and conditionals.  n = 5

1
2 4
3 6 9
4 8 12 16
5 10 15 20 25 */


n = 5

for (let i = 1; i <= 5; i++) {
    var line = ""

for (let j = 1; j <= i; j++){
    line += i * j + " "
}

console.log(line)

}


/* Problem 2: 
Given an array of objects where each object has properties name and age, write a JavaScript program to transform this array into an object of arrays categorized by age. If the input array is:

[{ name: 'John', age: 25 }, { name: 'Amy', age: 20 }, { name: 'cam', age: 25 }]

output

{ '20': ['Amy'], '25': ['John', 'cam'] } */



/* Problem 4:
Write a JavaScript program that generates a simple math quiz question using random numbers and asks the user for the answer using prompt(). Use a switch statement to randomize between addition, subtraction, and multiplication questions. For example, "What is 3 + 4?" or "What is 10 - 3?" or "What is 5 * 2?" */





/* Problem 5
Problem: Given an array of numbers, write a JavaScript program that first filters out all numbers less than 10, then sorts the remaining numbers in ascending order. Use a for loop for filtering and any method of your choice for sorting. Input example: [5, 11, 2, 16, 4, 18, 1, 20]. */

