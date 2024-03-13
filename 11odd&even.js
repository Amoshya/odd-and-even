const input  = require("readline-sync");

let a = input.questionInt("ENTER  NO A :- ");

if (a%2==0)
{
    console.log("EVEN");
} else {
    console.log("ODD");
}