class product{ 
    constructor(n,p,b,d){ 
        this.name=n; 
        this.price=p; 
        this.brand=b;
        this.discount=d; 

    }   
    discountp(){ 
        let newpr=this.price-100;  
        return newpr; 
    }


} 
const i1=new product("VIVO",2000,"Oppo",10);  
console.log(i1.discountp());
 
function product(n,p){ //we can create Objects in js using Function also
    this.name=n; 
    this.price=p; 
} 
const i1=new product("VIVO",1000); 
console.log(i1);
*/   
class product{  
    discount; 
    rating;  
    #brand // THis is used for declaring Private member Function
    constructor(n,p,b){  
        
        this.name=n; 
        this.price=p;  
        this.rating=0; 
         //this Rating will set for zero for Default cases; 
         this.#brand=b; 


    }
static custom(){ //Here this is a static Keyword that is called Dirctly in Object Section
    console.log("Hi learning js");
} 
} 
product.custom();  
const i1=new product("vivo",1000);  //Consturctor calling 
console.log(i1); 
console.log(i1.price); 
i1.price=200; 
console.log(i1.price);//Value is Updated here 


