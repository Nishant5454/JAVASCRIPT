function myname(){ 
    const name="nishant"; 
    function display(){ 
        console.log(name);
    } 
    return display; 

}  

const myfun=myname();   
myfun();  

function outerfun(){ 
    let outerval="value"; 
    function inner(){ 
        console.log(outerval);
    } 
    inner(); 
} 
outerfun();  
const msg="Error msg"; 
setInterval(function callback(){ 
    console.log(msg);
},2000);  

 
const e=20;
function sum(a){ 
    return function(b){ 
        return function(c){ 
            return function(d){  
                return a+b+c+d+e;
                

                
            };
        };
    }; 

} 
console.log(sum(1)(2)(3)(4)); 

const e=10; 
function sum(a){ 
  return  function sum2(b){ 
        return function sum3(c){ 
             return function sum4(d){ 
                return a+b+c+d+e;
            };
        };
    };
}  
const sum2=sum(12); 
const sum3=sum2(10); 
const sum4=sum3(30); 
const res=sum4(10); 
console.log(res);





