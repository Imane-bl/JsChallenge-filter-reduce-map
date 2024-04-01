//challenge
let myst = "1,2,3,EE,L,z,e,r,o,_,w,,e,b,_,S,c,h,o,o,L,2,0,Z";

let res = myst
    .split("")
    .filter(function(el) {
       // return isNaN(parseInt(el)); 
        return el !== 'Z' && el!==',' && isNaN(parseInt(el)) ?  el: ''
    }).map((el)=>el!=="_" ? el : " ")
   
    .reduce((acc, cur)=>  acc + cur)
    .slice(true, -1);//last carecter

console.log(res);

///////ass1-------------------------------------------------
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let ass1=mix.map(function(el){
    return isNaN(parseInt(el)) ? el:'';
}).reduce((acc,cur) => acc+cur);
console.log(ass1);
// Elzero
///////ass2-------------------------------------------------
let myString = "EElllzzzzzzzeroo";
let my=myString.split("").filter(function(el,index,s){
    return  s.indexOf(el)===index; //E=0,E=1 different
}).reduce((acc,cur) => acc+cur);
console.log(my);
// Elzero
///////ass3-------------------------------------------------
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let ass3=myArray.reduce(function(acc,cur){
  return acc+cur})
  .split("")
  .filter((el)=>  el !==',')
  .join("");


    console.log(ass3);
// Elzero
///////ass4-------------------------------------------------

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let ass4=numsAndStrings
.map((el)=> -el)
.filter((el)=> !isNaN(parseInt(el)));
console.log(ass4);

// [-1, -10, 10, 20, -5, -3]
///////ass5-------------------------------------------------
let nums = [2, 12, 11, 5, 10, 1, 99];
let ass5=nums.reduce(function(acc,cur){
    return cur % 2==0 ? acc*cur : acc+cur;
}, 1);
console.log(ass5);

// 500