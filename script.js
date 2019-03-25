function accord(x){
    var x ;
    var y = document.getElementById('q'+ x).style.height ;
    if(y == "350px"){
        document.getElementById('q'+ x).style.height = 0 ;
        document.getElementById('q'+ x).style.padding = 0;
    }else{
        document.getElementById('q'+ x).style.height = "350px";
        document.getElementById('q'+ x).style.padding = "20px";
    }
}

function conv1(){
    var a = document.getElementById('unit').options[document.getElementById('unit').selectedIndex].value;
    var b = document.getElementById('in1').value;

    if (a == "cm"){
        var cm =  b;
        var inch =  b * 0.393701;
        var ft =  b * 0.0328084;   
    }

    if (a == "in"){
        var cm =  b * 2.54;
        var inch =  b;
        var ft =  b * 0.08333;   
    }

    if (a == "ft"){
        var cm =  b * 30.48;
        var inch =  b * 12;
        var ft =  b;   
    }

    document.getElementById('ans_cm').innerHTML = cm;
    document.getElementById('ans_in').innerHTML = inch;
    document.getElementById('ans_ft').innerHTML = ft;
}

function conv2(){
    var a = document.getElementById('unit1').options[document.getElementById('unit1').selectedIndex].value;
    var b = document.getElementById('in2').value;

    if (a == "c"){
        var c =  b;
        var f = 1.8 * b + 32;
        var k =  b + 273.15;   
    }

    if (a == "f"){
        var c =  (b-32) / 1.8;
        var f =  b;
        var k =  c + 273.15;   
    }

    if (a == "k"){
        var c =  b - 273.15;
        var f =  1.8 * c + 32;
        var k =  b;;   
    }

    document.getElementById('ans_c').innerHTML = c;
    document.getElementById('ans_f').innerHTML = f;
    document.getElementById('ans_k').innerHTML = k;
}

function calc1(){
    var a = document.getElementById('in3').value;
    var tc = a * 19;
    document.getElementById('ans_tc').innerHTML = tc;
}

function calc2(){
    var a = document.getElementById('in4').value;
    var b = document.getElementById('in5').value;
    var bmi = a / (b * b);
    document.getElementById('ans_bmi').innerHTML = bmi;

    var c = document.getElementById('ans_bmil').innerHTML;
    if(bmi < 18.5){
        c = ". This is considered <b> unhealthy</b>";
    }
    if(bmi >= 18.5 && bmi <= 24.9){
        c = ". This is considered <b> healthy</b>";
    }
    if(bmi >= 25 && bmi <= 29.9){
        c = ". This is considered <b> overweight</b>";
    }
    if(bmi > 30){
        c = ". This is considered <b> obese</b>";
    }
    document.getElementById('ans_bmil').innerHTML = c;
}