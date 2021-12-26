function PriceFunc(){
    //Item 1
    var nb1 = document.getElementById("nb1").value;
    var jml1 = document.getElementById("jml1").value;
    var hrg1 = document.getElementById("hrg1").value;

    //Item 2
    var nb2 = document.getElementById("nb2").value;
    var jml2 = document.getElementById("jml2").value;
    var hrg2 = document.getElementById("hrg2").value;

    //Item 3
    var nb3 = document.getElementById("nb3").value;
    var jml3 = document.getElementById("jml3").value;
    var hrg3 = document.getElementById("hrg3").value;

    //Table management
    document.getElementById("n1").innerHTML = nb1;
    document.getElementById("p1").innerHTML = hrg1;
    document.getElementById("i1").innerHTML = jml1;

    document.getElementById("n2").innerHTML = nb2;
    document.getElementById("p2").innerHTML = hrg2;
    document.getElementById("i2").innerHTML = jml2;

    document.getElementById("n3").innerHTML = nb3;
    document.getElementById("p3").innerHTML = hrg3;
    document.getElementById("i3").innerHTML = jml3;

    //subtotal calculation
    var st1 = jml1 * hrg1;
    var st2 = jml2 * hrg2;
    var st3 = jml3 * hrg3;
    
    document.getElementById("st1").innerHTML = st1;
    document.getElementById("st2").innerHTML = st2;
    document.getElementById("st3").innerHTML = st3;

    var Total = st1 + st2 + st3;
    document.getElementById("Total").innerHTML = Total;
}