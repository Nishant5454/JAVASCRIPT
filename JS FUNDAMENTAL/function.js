function myfirst(){ 
    console.log("This is "); 
    console.log("My first Function")
    ;
} 
function evenorodd(x){ 
    if(x%2==0){ 
        return "Even";
    } 
    else{ 
        return "odd";
    }
}
let res=evenorodd(41); 
console.log(res);
function add(a,b,c,d){ 
    let res=a+b+c+d;
    return res;
}  
let m=add(4,5,6,7); 
console.log(m);  

function multiply(x){ //Function with parameter x
    return x*x;
} 
let k=multiply(10); //here it is returning the multiply function where 10 is an argument
console.log(k); 
function multipl(x,y){
    return x*y;
} 
console.log(multipl(2,3));  
function couter(n=2,s=4){ 
    return n*s;
} 
let t=couter(); 
console.log(t);

function addele([num1,num2,num3]){ 
    return num1+num2+num3;
} 
let arr=[1,2,3,45]
console.log(addele(arr));  
 
function arri(){
    let  sum=0; 
    for(let  i=0;i<arguments.length ;i++){ 
        sum+=arguments[i];
    } 
    return sum;
} 

console.log(arri(1,2,5,6,7,8,9,0)); 
 
//ARROW FUNCTION IN NODE JS 
const square=(x)=>x*x;  //=> is Denoting the arrow in JS

let ou1=square(5);  
console.log(ou1);
  //ANONYMS FUNCTION 
  let variable=function(){
    console.log("My Name is Nishant Kumar and JS IS fun"); 

  }  
  variable();  
  (function(name){ //IIFE 
    console.log("Greetings",name);

  })
  ("Nishant"); 
   
  
  let beeta=function(o,p) { //ANONYMS FUNCTION
    return o+p;
  } 
  let gama=function eval(f,u){ //EXPRESS FUNXCTION
    return f+u;
  } 
  
  console.log(beeta(1,40)); 
  console.log(gama(3,5));  
   
  /*Self EVOKING FUNCTION*/
  (function(c){ 
    console.log("WELCOME TO",c);
  })("Nishant"); 

