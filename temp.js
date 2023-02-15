var from=document.getElementById("from");
var input=document.getElementById("input_value");
var output=document.getElementById("output");
var to=document.getElementById("to");
var clear=document.getElementById("clear");
let temp;
input.addEventListener('input', function(){
    if(from.value=='celsius'&&to.value=='farenheit')
    {
        temp=input.value;
        output.value=(temp*9/5)+32;
    }
    if(from.value=='farenheit'&&to.value=='celsius')
    {
        temp=input.value;
        output.value=(temp-32)*5/9;
    }
    if(from.value=='celsius'&&to.value=='kelvin')
    {
        temp=input.value;
        output.value=temp+273.15;
    }
    if(from.value=='kelvin'&&to.value=='celsius')
    {
        temp=input.value;
        output.value=temp-273.15;
    }
    if(from.value=='kelvin'&&to.value=='farenheit')
    {
        temp=input.value;
        output.value=(temp-273.15)*(9/5)+32;
    }
    if(from.value=='farenheit'&&to.value=='kelvin')
    {
        temp=input.value;
        output.value=(temp-32)*(5/9)+273.15;
    }
    if(from.value==to.value)
    {
        output.value=input.value;
    }
    
});
output.addEventListener('output',function(){
    if(output.value==0)
    {
        document.body.style.backgroundImage="url('istockphoto-868098786-170667a.jpg')";
    }
    else{
        document.body.style.backgroundColor="red"
    }
})
clear.addEventListener('click',function(){
    console.log("pressed");
    input.value=0;
    output.value=0;
});