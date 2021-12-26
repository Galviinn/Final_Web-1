function Submit(){

    var bucket = 0;
    
    //Sender
    var w = document.getElementById("mail1").value;
    var wv = w.endsWith("@gmail.com");
    if (wv != true){
        alert("Invalid Sender Address, please only use Gmail!");
        return 0;
    }else {bucket++;}

/*
    //Destination
    var x = document.getElementById("mail2").value;
    var xv = x.endsWith("@gmail.com");
    if (xv != true){
        alert("Invalid Destination Address, please only use Gmail!");
        return 0;
    }else {bucket++;}

    //CC
    var y = document.getElementById("mail3").value;
    var yv = y.endsWith("@gmail.com");
    if (yv != true){
        alert("Invalid CC Address, please only use Gmail!");
        return 0;
    }else {bucket++;}

    //BCC
    var z = document.getElementById("mail4").value;
    var yv = z.endsWith("@gmail.com");
    if (yv != true){
        alert("Invalid BCC Address, please only use Gmail!");
        return 0;
    }else {bucket++;}

*/

    if (wv == true){ //|| xv == true || yv == true || zv == true){
        alert("Redirecting...");
        window.location = "https://galviinn.github.io/";
    }

    return 0;

}
