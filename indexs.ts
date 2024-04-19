//question1
let greetings = "HELLO WORLD";
console.log( greetings);
//question2
let n = 20;
let n1 = 10;
console.log("Q2 :let num =20 and 10");
let add = n + n1;
let sub = n - n1;
let multi = n * n1;
let div = n / n1;
console.log(" their sum = ", add);
console.log("their sub = ", sub);
console.log("their multi = ", multi);
//question3
let n2 = 20;
let n3 = 10;
console.log("Q3 :Before swipping");
console.log(" number1 =", n2);
console.log("number2 = ", n3);
n2 = n2 - n3;
n3 = n3 + n2;
console.log("Q3 : After swipping");
console.log(" number1 =", n2);
console.log(" number2 =", n3);
//question4
let message:string;
message = "Hey";
console.log("Q4 :message =", message);
//question5
let num = 50;
let num1 = 5;
console.log("Q5 : number1 =", num);
console.log(" number2 =", num1);
console.log("their reminder =", (num %= num1));
//question6
let f = 0;
let g = 0;
f++;
g = 0 + 1;
console.log("Q6 : increment first way=", f);
console.log(" increment second way =", g);
//question7
let x = true;
let y = false;
let z = true;
console.log("Q7 : And for xy =", x && y);
console.log("or for xy =",x || y);
console.log("not for xy =", !x, !y);
console.log(" And for xz =", x && z);
console.log("or for xz =", x || z);
console.log("not for xz =", !x, !z);
console.log(" And for yz =", y && z);
console.log("or for yz =", y || z);
console.log("not for yz =", !y, !z);
//question8
let no = 10;
no += 2;
console.log("Q8 : 10+ =2", no);
no -= 2;
console.log(" 12-=2", no);
no *= 2;
console.log("10*=2", no);
no /= 2;
console.log("20/=2", no);
//question9
let no1 = 4;
if (no1 % 2 == 0) {
    console.log(" Q9 :EVEN NUMBER");
}
else {
    console.log("ODD NUMBER");
}
//question10
let age = 20;
if (age >= 18) {
    console.log("Q10 : its eligible to vote");
}
else {
    console.log("its not eligible to vote");
}
//question11
let score = 89;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Q13 : Grade B ");
}
else if (score >= 60) {
    console.log(" Grade C");
}
else if (score >= 50) {
    console.log("Grade D");
}
else {
    console.log("FAIL");
}
//question12
let a = 10;
let b = 20;
let c = 30;
if (a > b) {
    if (a > c) {
        console.log("GREATER NUMBER IS=", a);
    }
}
else if (b > c) {
    console.log("GREATER NUMBER IS=", b);
}
else {
    console.log("Q12: GREATER NUMBER IS =", c);
}
//question13
let year = 2024;
if (year % 2 == 0) {
    console.log("Q14 : ITS A LEAP YEAR");
}
else {
    console.log("ITS NOT A LEAP YEAR");
}
//question14
let fahrenheit = 100;




let celsius = ((fahrenheit - 32) * 5) / 9;
console.log("Q14 : TEMPERATURE IN CELSIUS =", celsius.toFixed(2));
//question15
let e = 10;
if (e > 0) {
    console.log("Q15 : NUMBER IS POSITIVE");
}
else if (e < 0) {
    console.log("Q15 : NUMBER IS NEGATIVE");
}
else {
    console.log("Q15 : NUMBER IS NULL");
}
//question16
let j = 2;
console.log("2 * 1 =", 2 * 1);
console.log("2 * 2 =", 2 * 2);
console.log("2 * 3 =", 2 * 3);
console.log("2 * 4 =", 2 * 4);
console.log("2 * 5 =", 2 * 5);
console.log("2 * 6 =", 2 * 6);
console.log("2 * 7 =", 2 * 7);
console.log("2 * 8 =", 2 * 8);
console.log("2 * 9 =", 2 * 9);
console.log("2 * 10 =", 2 * 10)