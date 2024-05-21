console.log("Arithmetic operator");
let a=19;
let v=98;
let c= a+v;
console.log(c);
console.log(a-v);
console.log(a*v);
console.log(a/v);
console.log(v%a);
console.log(v**a);
console.log(a-- ,a);
console.log(v++ ,v);

console.log("Assignment operator");
let k=13;
console.log(k);
console.log(k+=13);
console.log(k-=87);
console.log(k*=87);
console.log(k%=8);
console.log(k**=3);

console.log("Comparison operator");
let o=9;
let t=8;
let h="8";

console.log(o==t); //false
console.log(t==h); //true
console.log(t===h); //false
console.log(t!=h); //false
console.log(t!==h); //true

console.log("logical operator");
console.log(o>14 && t>7); //false
console.log(o>14 || t>7); //true
console.log(!(o>14 || t>7)); //false

console.log("Ternary operator")
let age=20;
 age>=18 ? console.log("Date") : console.log("Study");