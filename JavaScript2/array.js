console.log("Arrays");

let a1=["pranjal","pinju","chidiya"];
let a2=["hello",123]; //no error

console.log(a1,a2);
console.log(typeof a1);
console.log(a1[2]);
a1[1]="bhalu";
console.log(a1);
console.log(a2.length);

 console.log("iteration");
for(let i in a1){
    console.log(a1[i]);
}
// for(let i of a2){
//     console.log(a2[i]); //wrong
// }

a1.push("87");
a1.push(6893,7,8); //valid
a1.pop();
console.log(a1);

a1.toString();
a1.unshift(34,8,6,45);
console.log(a1);
a1.shift();
console.log(a1);

a1.splice(1,2,23,65);
console.log(a1);

