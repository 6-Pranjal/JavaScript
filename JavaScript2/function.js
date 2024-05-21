console.log("fuctions in Javascript")
function fs() {
    console.log("my name is Pranjal");
}
fs();

function sum(x, y) {
    sum = x + y;
    console.log(sum);
}
sum(78, 3);

console.log("arraow functions");
const sub = (m, f) => {
    return m - f;
};
let output = sub(78, 9);
console.log(output);

console.log("for each loop");
let array = [2, 5, 6, 8, 3, 1];
array.forEach(element => {
    console.log(element * element);
});

console.log("maps");
let arr = array.map((val) => {
    return val + "P";
});
console.log(arr);

console.log("Filtered array");
let brr = array.filter((val) => {
    return val % 2 !== 0;
});
console.log(brr);

console.log("Reduced array");
let h = [5, 6, 25, 4, 6];
const out = h.reduce((p, c)=>{
    return (p > 2 * c) ? p : c;
});
console.log(out);