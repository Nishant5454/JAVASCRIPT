let gmaillogin=true; 
let Githublogin=false; 
let mxlogin=true;

console.log("Allow Login",gmaillogin||Githublogin||mxlogin) 
// || if any of condition is true return true 
// && if both Condition is true then return true; 
let login=true; 
let card=false; 
console.log(" Not Allow Purchase",login||card); 

//Condition in js
let age=1; 
if(age>18)
console.log("ALoowed for Voting"); 
else if(age==18) 
console.log("Not Aloowed for Voting");  
else 
console.log("Minor"); 
let user=null; 
if(user){ 
    console.log("user not login");
} 
else{ 
    console.log("Plz login First");
}
let trafic="green"; 
if(trafic=='red') 
{ 
    console.log("Please Stop Your Vechile");
} 
else if(trafic=="YELLOW"){ 
    console.log("SLOW DOWN THE VECHILE");
} 
else{
    console.log("GO");

}