function newdummy(){ 
    return new Promise(function exex(resolve, reject) {
        setTimeout(function f(){  
            console.log("Timer Starts");  
            let number=1; 
            if(number>10) 
            resolve("done"); 
        else 
        reject("Error");


        },10); //This is promise Function
    });
} 
async function consume(){  //asynchronous function 
    try{
    console.log("start"); 
const res=await newdummy();   //await funtion
console.log("Reposne is",res); 

    }catch(err){ 
        console.log("ERR");
    } 
    finally{ 
        console.log("RESOLVE");
    }

} 
consume();  
console.log("END");
