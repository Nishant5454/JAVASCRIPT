//const newSet=new Set(); 
//newSet.add(3); 
//newSet.add(4); 
//newSet.add(9); 
//console.log(newSet); 
let array=[1,2,3,1,3,4,2]; 
const newSet=new Set(array); 
console.log(newSet);
let array1=[3,4,6,3]; 
let mySet=new Set(array1); 
console.log(mySet); 
console.log(mySet.has(6));//it cheks if the ele is present or not in HASHSET 
console.log(mySet.clear());//It removes all the element from hashset
console.log(mySet); 
//////HASHMAPS IN JS  
const myMap=new Map(); 
console.log(myMap.size); 
let arr=[[1,"Nishant"],[2,"Prince"],[3,"Naveen"],[4,"Prkash"]]; 
arr.map(el=>myMap.set(el[0],el[1]))
console.log(myMap);

