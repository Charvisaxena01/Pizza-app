var add = [];

function none() {
    document.getElementById("display_menu").style.display = "none";
}

function getmenu() {
    document.getElementById("display_menu").style.display = "inline-block";
    document.getElementById("but").style.display = "none";
}
debugger
i = 5.;

function add_item() {

    i++;
    document.getElementById("no").innerHTML += "<br>" + i;
    //var num = document.getElementById("no").innerHTML = "<br>" + i;
    console.log(i);
    var ad_piz = document.getElementById("add_item").value;


    add.push(ad_piz);
    document.getElementById("display_menu").innerHTML = document.getElementById("display_menu").innerHTML + ad_piz + "<br>";
}