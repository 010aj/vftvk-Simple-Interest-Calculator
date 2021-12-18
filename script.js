function compute()
{
    p = parseInt(document.getElementById("amount").value);
    r = parseFloat(document.getElementById("rate").value);
    t = parseInt(document.getElementById("years").value);
    const d = new Date();
    y1 = d.getFullYear();
    y2 = y1+t;
    si = p*r*t/100;
    fp = p + si;
    if(p<0 || isNaN(p) || p==""){
    alert("Please enter positive number only");
    document.getElementById("amount").focus();
    }
    else{
    document.getElementById("p2").innerHTML = "If you deposit "+"<mark>"+p+","+"</mark>"+"<br>"+"at an interest rate of "+"<mark>"+r+"%."+"</mark>"+"<br>"+"You will receive an amount of "+"<mark>"+si+","+"</mark>"+"<br>"+"in the year "+"<mark>"+y2+"</mark>";}
}
