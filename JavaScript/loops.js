console.log("for loop")
let n = 10;
let i = 1;
for (i; i <= 10; i++) {
    console.log("loops are fun", i);
}
console.log("program ented condition false", i);

console.log("for-of loop");
let name="Pranjal";
for(let i of name){
    console.log(i);
}

console.log("for-in loop");
let employee={
    name:"Pranjal",
    position:"SDE",
    company:"Atlassian",
    ctc:"1cr"
};

for(let k in employee){
    console.log(k ,": ", employee[k]);
}