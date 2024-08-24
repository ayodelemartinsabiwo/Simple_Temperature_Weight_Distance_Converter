
function temp() {

    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var celcius = document.getElementById("c").value;
    var fah = (celcius * 9/5) + 32;

    document.getElementById('f').value = fah
    inputbkg();

}

function weight() {
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kg").value;
    var p = kg * 2.2;

    document.getElementById('p').value = p
    inputbkg();
}

function dist() {
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var ml = km * 0.62137;

    document.getElementById('ml').value = ml
    inputbkg();
}

function inputbkg() {
    // accessing only single attribute
    // var gi = document.getElementsById("f")
    // var value = parseInt(gi.value.trim());
    // if (value > 40) {
    //     gi.style.backgroundColor = "lightgreen";
    // }

    //accessing multiple attributes by class
    var gi = document.getElementsByClassName("outp")
    for(var i = 0; i <= gi.length; i++) {
        var value = parseInt(gi[i].value.trim());
        if (value > 40) {
            gi[i].style.backgroundColor = "lightblue";
        }


    }
}
