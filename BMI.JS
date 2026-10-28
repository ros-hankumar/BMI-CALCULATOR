const weight=document.getElementById("weight");
const height=document.getElementById("Height");
const button=document.getElementById("btn");
const result=document.getElementById("result");
btn.addEventListener("click",function(){
let weightValue=Number(weight.value);
let heightValue=Number(height.value);
let heightInMeter=heightValue/100;
let bmi=weightValue/(heightInMeter*heightInMeter); 
result.innerText=bmi.toFixed(2);
});  




