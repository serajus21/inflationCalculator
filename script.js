let byp, cyp, inflationRate; //variable

//inflation
function inflation()
{
    byp = parseFloat(document.getElementById("baseYearPrice").value);
    cyp = parseFloat(document.getElementById("currentYearPrice").value);
    inflationRate = ((cyp-byp)/byp)*100;
    document.getElementById("output").innerHTML="The inflaton rate is: "+inflationRate+" %";
}
