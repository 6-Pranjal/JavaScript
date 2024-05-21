
// console.log("generating user name");
// let input=prompt("Enter your name without space");
// console.log("@"+input+input.length);

console.log("generating user name");
// let r=Math.round(Math.random()*73);

let input1=prompt("Enter your name without space");
let a=console.log("a"+"@"+input1+ Math.round(Math.random()*73) );
let b=console.log("b "+ "@"+input1+Math.round(Math.random()*73));
let c=console.log(" c"+ "@"+input1+Math.round(Math.random()*73));
let d=console.log(" d"+ "@"+input1+Math.round(Math.random()*73));

let choice=prompt("choose anyone option a b c d for username");

let username;
switch(choice){
    case a:
        username=a;
        console.log("your username is" + username);
        break;
    case b:
        username=b;
        console.log("your username is" + username);
        break;
    case c:
        username=c;
        console.log("your username is" + username);
        break;
    case d:
        username=d;
        console.log("your username is" + username);
        break;
    default: console.log("please choose from provied");

}

