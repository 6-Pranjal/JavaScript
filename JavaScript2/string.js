console.log("Strings");
let candidate = "prranjal";

console.log(candidate);
console.log(candidate.length);
console.log(candidate[4]);

console.log("Creating an object for pen");
const product = {
    name: "ball pen",
    color: "black",
    rating: 4,
    price: 270,
    discount: "5%",
    isDeal: true,
};
console.log("template literals");
let output = `product is ${product.name} whose price is ${product.price}`;
console.log(output);
let coin="ruppee";
let country="Bhart";
console.log(coin.toUpperCase());
console.log(coin.toLowerCase());
console.log(coin[4]);
console.log(coin.trim());
console.log(coin.slice(1,4));
console.log(coin.concat(country));
console.log(country.charAt(3));
console.log(coin , country);