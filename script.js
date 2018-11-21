console.log("JavaScript");
//confirm("saya bisa bikin web")
let firstText = "this is a string";
let secondText = " another string";
let combinedText = `${firstText} and ${secondText}`;
console.log(combinedText);

let pureDecimal = 2;
let floatNmber = 2.24;
//debugger;
pureDecimal = 2 + 2;
pureDecimal = 1 + 2  / 4;
console.log(pureDecimal);

let object = {
    name: "michael tamsil",
    university: "UIB",
    year: 2018,
    friends: ["mark", "Jessy", "Shawn"]
}

console.log(object);
console.log(object.university);

moment.locale('id');
let tgl = moment();
console.log(tgl.format('LLLL'));
let tgl2 = tgl.format('dddd,  YYYY DD MMMM');
let pesan = `hari ini adalah ${tgl2}`
console.log(pesan);

// let grade = window.prompt("my grade is ");
// let result = '';

// if (grade >= 90) {
//    result = "A";
// } else if (grade >= 80) {
//    result = "B";
// } else if (grade >= 70) {
//    result = "C";
// } else if (grade >= 60) {
//    result = "D";
// } else {
//    result = "F";
// }
// window.alert (`your score is ${result}`)

array = [1, 2, 3]

for (i = 0; i < array.length; i++) {
   let text = array[i];
   console.log(text)
 }