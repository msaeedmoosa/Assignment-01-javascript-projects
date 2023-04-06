// assignment 01 part 01 

// let user1Input = prompt("enter first number");
// let user2Input = prompt("enter 2nd number");
// if(user1Input > user2Input) {
//     console.log(user1Input);
// }   
// else {console.log(user2Input)}

// assignment 01 part 02

//  let num = prompt("Enter Number");
//  if(num > 0) {
//      sign = "positive";
//  }   
//  else if (num < 0) {
//     sign = "Negative";
//  }
//  else {
//     sign = "zero";
//  }

//  alert(" sign of " + num + " is " + sign);    


// assignment 01 part 03


// let user1Input = prompt("enter first number");
// let user2Input = prompt("enter second number");
// let user3Input = prompt("enter third number");
// let user4Input = prompt("enter fourth number");
// let user5Input = prompt("enter fifth number");

// if (user1Input > user2Input) {
//     console.log(user1Input);
// }
// else if (user2Input > user3Input) {
//     console.log(user2Input);
// }

// else if (user3Input > user4Input) {
//     console.log(user3Input);
// }

// else if (user4Input > user5Input) {
//     console.log(user4Input);
// }
// else{
//     console.log(user5Input);
// }

// assignment 01 part 04


// for(let i = 0; i<=15; i++){
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }

// assignment 01 part 05


// let marksInput = prompt("Enter obtained marks.");
// if(marksInput < 60 ){
//     console.log("F");
// } else if(marksInput >= 60 && marksInput < 70){
//     console.log("D");
// } else if(marksInput >= 70 && marksInput < 80){
//     console.log("C");
// } else if(marksInput >= 80 && marksInput < 90){
//     console.log("B");
// }    
// else if(marksInput >= 90 && marksInput <= 100){
//     console.log("A");
// }    else {
//     console.log("invalid marks");
// }

// assignment 01 part 06

// for(let i = 1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log("fizzBuzz");
//     }else if(i % 3 === 0) {
//         console.log("fizz")
//     }else if(i % 5 === 0){
//         console.log("Buzz")
//     }
// }

// assignment 01 part 07

for (let i = 1; i<=5; i++){
    let row=" ";
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}