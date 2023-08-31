/*function even(x){ 
    try{ 
        if(x%2==0){ 
            console.log("Even");
        } 
        if(x%2!=0){ 
            console.lo("odd");//This is where error comes
        } 
        console.log("ERR");
    } 
    catch{ 
        console.log("Handled ");
    }
} 
console.log(even(11));  
*/ 
function prime(x){ 
    try{ 
        for(let i=2;i<=x/2;i++){ 
            if(x%i==0) 
            { 
                console.log("Not Prime");
            } 
            
        } 
        console.log("Prime");
        }
        catch{ 
            console.log("Handled");
        } 
        finally{ 
            console.log("end");
        }
    
}
(prime(11));
