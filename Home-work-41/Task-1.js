last


// let mark = 45;
// let averageGrade;

// if (mark >= 60) {
//     averageGrade = "Задовільно";
// }
// if (mark >= 71) {
//     averageGrade = "Добре";
// } 
// if (mark >= 81) {
//     averageGrade = "Дуже Добре";
// } 
// if (mark >= 91) {
//     averageGrade = "Відмінно";
// } 
// if (mark < 60) {
//     averageGrade = "Незадовільно";
// } else {
//     console.log("Та ти шо");
// }
// console.log(averageGrade);

const mark = 150;
let average = ' ';

if(mark < 60){
    average = 'Not good';
} else if (mark <= 70){
    average = 'more less';
} else if (mark <= 80){
    average = 'Good';
}else if (mark <= 90){
    average = 'Very Good';
}else if (mark <= 100){
    average = 'Nice Good';
} else {
    console.log('not good person');
}
console.log(average);
