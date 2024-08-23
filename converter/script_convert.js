
function temp() {
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var celcius = document.getElementById("c").value;
    var fah = (celcius * 9/5) + 32;

    document.getElementById('f').value = fah

}

function weight() {
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kg").value;
    var p = kg * 2.2;

    document.getElementById('p').value = p
}

function dist() {
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var ml = km * 0.62137;

    document.getElementById('ml').value = ml
}
