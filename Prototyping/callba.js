 /*callback in js*/
 function fn(x){ 
    x(); 
    x();
} fn(function p(){ //function p() is an argument for the main function fn();
    console.log("Done");
})
function time(){ 
    for(let i=0;i<100000;i++){
}
}
console.log("Start work"); 
time();  
console.log("Start the timer");
setTimeout(function time(){ 
    console.log("Working stareted");
},2000);  
setTimeout(function time(){ 
    console.log("Work in prog");
},0); 
setTimeout(function time(){  
    console.log("Do some method");

},10)
console.log("Work end"); 
time(); 

/*Promises in JS*/
function dummy(){ 
    return new Promise((resolve, reject) => {
        setTimeout(function time(){ 
            console.log("WORK DONE");
        },1000);
        resolve("Work done")
    })
} 
let p=dummy();  
p.then(function time(val){ 
    console.log("Valus is resolved",val);
}) 
for(let i=0;i<1000000000;i++){} 
console.log("End position");
