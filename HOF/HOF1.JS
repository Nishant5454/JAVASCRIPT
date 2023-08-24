const powerofto=(n)=>{ 
    return n**2;
} 
function powercube(powerofto,n){ 
    return powerofto(n)*n;
} 
const p=powercube(powerofto,6); //THIS IS KNOWN AS HIGHER ORDER FUNCTION(HOF)
console.log(p); 
const HIGHERORDERFUNCTION=n=>{  
    const twofun=m=>{ 
        const threedun=p=>{ 
            return m+n+p;
        }
        return threedun;
    } 
    return twofun;  



} 
console.log(HIGHERORDERFUNCTION(2)(3)(5));   

const mynums=[1,3,3,1];  

const sumarr=array=>{ 
    let total=0; 
    array.forEach(function(element){ 
        total+=element;
    
        
    }); 
    return total;
} 
console.log(sumarr(mynums));
function onehello(){ 
    console.log("Nishant",Math.random());
    
}   
//setInterval(onehello,2);
setTimeout(onehello,2); 




