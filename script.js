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
    document.getElementById("p2").innerHTML = "If you deposit "+p+"<br>"+"at an interest rate of "+r+"%."+"<br>"+"You will receive an amount of "+fp+",<br>"+"in the year "+y2;
}