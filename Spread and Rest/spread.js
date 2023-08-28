let arr=[1,2,3,5] 
let arr1=[3,5,6,7] 
let arr2=[...arr, ...arr1]//This is spread 
console.log(arr2);  
function array() { 
    let args=Array.from(arguments) 
    const elt=args.map(el=>el*2); 
    console.log(elt);
    
} 
array(2,3,4); 
array(4,5,6);
