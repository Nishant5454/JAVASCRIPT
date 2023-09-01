class complex{ 
    #real; 
    #image; 
    constructor(r,i){ 
        this.#real=r; 
        this.#image=i; 
    }  
    get real(){ 
        return this.#real; 
    } 
    get image(){ 
        return this.#image;
    } 
    addcomplexno(c){ 
        this.#real+=c.real; 
        this.#image+=c.image;
    } 
    display(){ 
        console.log(this.#real , "+i" ,this.#image);
    }
} 
const c1=new complex(5,4); 
const c2=new complex(2,3); 
c1.addcomplexno(c2); 
c1.display();
String.prototype.truelength=function(){ //This method is used to manipulate the object value in js
    console.log(`True length is ${this.trim().length}`);
} 
console.log("nishanti    ".truelength());