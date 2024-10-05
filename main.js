console.log('----변수----')
var a=1
let b=2
c=3
const d=10
console.log(a+b)
console.log(a+b+c)
console.log(a+b+c+d)
console.log('----함수----')
function 함수(x) {
  let temp = 2*x+3
  return temp
}
console.log(함수(3))
function 함수2(x,y) {
  let temp = 2*x + 3*y
  return temp
}
console.log(함수2(3,3))
console.log('----조건문----')
money = 4000
if(money > 5000) {
  console.log("택시를 탄다.");
} else if(money > 2000) {
  console.log("버스탄다");
} else {
  console.log("걸어간다");
}
money = 1000
if(money > 5000) {
  console.log("택시를 탄다.");
} else if(money > 2000) {
  console.log("버스탄다");
} else {
  console.log("걸어간다");
}
console.log('----반복----')
for(let i = 0; i < 10; i++) {
  console.log("강한솔" + i);
}
console.log('----값을 여러개----')
myArray=[1,2,3,4,5]
myArray.forEach(element => {
  console.log("이상목"+element)
});