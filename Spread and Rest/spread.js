let arr=[1,2,3,5] 
let arr1=[3,5,6,7] 
let arr2=[...arr, ...arr1]//This is spread 
console.log(arr2); 
function array(){ 
    let args=Array.from(arguments); 
    const three=args.map(el=>el*3); 
    console.log(three);
    
}
array(2,3,4); 
array(4,5,6);
//To remove extra args we will use spread orperator 
function array(...args){ 
    const three=args.map(el=>el*4); 
    console.log(three);
} 
array(34,5,6); 
 
const heros=["ironman","hulk","thor"]; 
const newheros=["batman",...heros,"Nihs"]; 
console.log(newheros); 
const alumni="Nishant"; 
console.log([...alumni]); 
// ....spread a string or array