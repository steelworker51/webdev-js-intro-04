// Prevent us from attempting to use variables
"use strict"

let healthPoints = 9;

if (healthPoints >= 10) {
    console.log("Hero is healthy.");
} else if (healthPoints >= 5) { 
    console.log("Hero is slightly damaged.");
} else {
    console.log("Hero is close to death.");
}