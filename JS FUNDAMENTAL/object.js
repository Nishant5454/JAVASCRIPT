let obj={id:1023, name:"Nishant",sal:1000};  
obj.phone=9334463365; 
let obm=new Object(); 
obm.id='103'; 
obm.name="Piyush"; 
obm.fee=12000; 
console.log(obm); 
//UISNG FUNCTION CREATING OBJE 
function emp(x,y){ 
    this.a=x; 
    this.b=y;  
    return x+y;


} 
let y=emp(2,4);
console.log(y);  
function et(id,name,sal){ 
    this.name=id; 
    this.id=name; 
    this.ty=sal;
} 
const e=new et(101,'Nihsant',10000) 
console.log(e); //OBJECT CREATION IN JS 
/*Manipulation Object*/ 
const ey={ 
    im:1234, 
    nme:"Nishant", 
    sakl:10000

};
console.log(ey.im); 
console.log(ey.nme); 
ey.im=1234;  
delete ey.im;
console.log(ey); 
/*OBJECT METHODS IN JS*/  
const es={ 
    ip:11343,
    namer:"LAEX",
    SAL:1000
}; 
const p=Object.keys(es); 
console.log(p);
 const z=Object.values(es); 
 console.log(z); 
 const l=Object.entries(es); 
 console.log(l);  
 delete es.ip; 
 console.log(es);
 Object.freeze(es)//UPDATION IS NOT ALLOWED 
 es.ip=354; 
 console.log(es); 
 






