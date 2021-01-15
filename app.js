let rednum = 0;
let bluenum = 0;
let prev = "0";


function roll() {
    document.getElementById("button").style.display = "none"
    document.getElementById("button1").style.display = "block"
    let val = Math.floor((Math.random() * 6) + 1);
    document.getElementById("h2").innerHTML = "red got" + " :  " + val;
    rednum += val;
    if (rednum == 2) {
        rednum = 16
    } else if (rednum == 8) {
        rednum = 28
    } else if (rednum == 25) {
        rednum = 56
    } else if (rednum == 59) {
        rednum = 87
    } else
    if (rednum == 88) {
        rednum = 38
    } else if (rednum == 74) {
        rednum = 66
    } else if (rednum == 47) {
        rednum = 27
    } else if (rednum == 15) {
        rednum = 4
    }


    if (rednum > 100) {
        rednum -= val;
        prev = "0"
    }
    if (rednum >= 100) {
        alert("Red won") // return
        document.getElementById('button').style.display = 'none'
        document.getElementById('button1').style.display = 'none'
        document.getElementById('button2').style.display = 'block'
        document.getElementById("h2").innerHTML = "Red Won"



    }
    let ab = rednum.toString();
    document.getElementById(ab).style.backgroundColor = "red"
    document.getElementById(prev).style.backgroundColor = "aqua"
    prev = ab;



    console.log(rednum)

}
let prev1 = "0";

function roll1() {

    let val = Math.floor((Math.random() * 6) + 1);
    document.getElementById("h2").innerHTML = "blue got" + ": " + val;
    bluenum += val;
    if (bluenum == 2) {
        bluenum = 16
    } else if (bluenum == 8) {
        bluenum = 28
    } else if (bluenum == 25) {
        bluenum = 56
    } else if (bluenum == 59) {
        bluenum = 87
    } else
    if (bluenum == 88) {
        bluenum = 38
    } else if (bluenum == 74) {
        bluenum = 66
    } else if (bluenum == 47) {
        bluenum = 27
    } else if (bluenum == 15) {
        bluenum = 4
    }

    if (bluenum > 100) {
        bluenum -= val;
        prev1 = "0"

    }

    document.getElementById("button1").style.display = "none";
    document.getElementById("button").style.display = "block";
    if (bluenum >= 100) {
        document.getElementById('button').style.display = 'none'
        document.getElementById('button1').style.display = 'none'
        document.getElementById('button2').style.display = 'block'
        document.getElementById("h2").innerHTML = "Congratulation <br/> Blue Won"

        alert("Blue won");

    }
    // let a=document.getElementById("test3").getAttribute('value');
    let ab = bluenum.toString();

    document.getElementById(ab).style.backgroundColor = "blue"
    document.getElementById(prev1).style.backgroundColor = "aqua"
    prev1 = ab;



}

function roll2() {
    window.location.reload()

}

// if (rednum >= 100 || bluenum >= 100) {
//     console.log(rednum, bluenum)
//     console.log("hi")
//     else if (bluenum >= 100) {
//         alert("Blue won")
//     }
// }