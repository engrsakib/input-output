function math(){
    var a = document.getElementById("startNmuber").value;
    var b = document.getElementById("possition").value;
    console.log(a);
    const out = document.getElementById("EndNumber");
    const outa = document.getElementById("outp");
    out.innerHTML = a;
    outa.innerHTML =  b;
}
math();