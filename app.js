let rednum = 0;
let bluenum = 0;
let prev = "0";

function roll4() {
    document.getElementById("button").style.display = "block"
    document.getElementById("button1").style.display = "block"
    document.getElementById("button4").style.display = "none"

}

function roll() {
    document.getElementById("button1").style.display = "none"

    let val = Math.floor((Math.random() * 6) + 1);
    // document.getElementById("h2").innerHTML = "red got" + " :  " + val;
    document.querySelector("img").style.display = "block";

    document.querySelector(".img").setAttribute("src", "new.gif")
    setTimeout(function() {
        document.getElementById("p").innerHTML = "Blue Player tern"
        document.querySelector(".img").setAttribute("src", "dice" + val + ".png");
        rednum += val;
        if (rednum > 100) {
            rednum -= val;
            prev = "0"
        }
        document.getElementById("button").style.display = "none"
        document.getElementById("button1").style.display = "block"
        let ab = rednum.toString();

        if (rednum == 2 || rednum == 8 || rednum == 25 || rednum == 59) {
            document.getElementById(ab).classList.remove("second")
        } else if (rednum == 15 || rednum == 47 || rednum == 74 || rednum == 88) {
            document.getElementById(ab).classList.remove("first")
        }

        if (rednum >= 100) {
            alert("Red won") // return
            document.getElementById('button').style.display = 'none'
            document.getElementById('button1').style.display = 'none'
            document.getElementById('button2').style.display = 'block'
            document.getElementById("h2").innerHTML = "Congratulation <br/>Red Won"
            document.getElementById("p").innerHTML = ""




        }
        document.getElementById(ab).classList.add("test4")

        document.getElementById(prev).classList.remove("test4")
        prev = ab;

        //Jumping from one box to another box

        setTimeout(function() {
            if (rednum == 2) {
                rednum = 16;
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("second")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;
            } else if (rednum == 8) {
                rednum = 28
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("second")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;
            } else if (rednum == 25) {
                rednum = 56
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("second")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;
            } else if (rednum == 59) {
                rednum = 87
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("second")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;
            } else
            if (rednum == 88) {
                rednum = 38;
                setTimeout(function() {
                    let ab = rednum.toString();
                    document.getElementById(prev).classList.add("first")
                    document.getElementById(prev).classList.remove("test4")
                    prev = ab;
                }, 3000);
            } else if (rednum == 74) {
                document.getElementById(prev).classList.add("first")
                rednum = 66;
                setTimeout(function() {
                    let ab = rednum.toString();
                    document.getElementById(ab).classList.add("test4")
                    document.getElementById(prev).classList.remove("test4")
                    prev = ab;
                }, 3000);
            } else if (rednum == 47) {
                rednum = 27;
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("first")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;
            } else if (rednum == 15) {
                rednum = 4;
                let ab = rednum.toString();
                document.getElementById(prev).classList.add("first")
                document.getElementById(ab).classList.add("test4")
                document.getElementById(prev).classList.remove("test4")
                prev = ab;

            }
        }, 1000);

    }, 1000);
}

// Function for blue roll


let prev1 = "0";

function roll1() {
    document.getElementById("button").style.display = "none"
    let val = Math.floor((Math.random() * 6) + 1);
    // document.getElementById("h2").innerHTML = "blue got" + ": " + val;
    document.querySelector("img").style.display = "block";

    //setting up a  rotating dicesgif

    document.querySelector(".img").setAttribute("src", "new.gif")

    //main function

    setTimeout(function() {
        document.getElementById("p").innerHTML = "Red Player tern"
        document.querySelector(".img").setAttribute("src",
            "dice" + val + ".png");
        bluenum += val;

        //checking for overflow condition

        if (bluenum > 100) {
            bluenum -= val;
            prev1 = "0"
        }
        document.getElementById("button1").style.display = "none";
        document.getElementById("button").style.display = "block";

        //showing win condition

        if (bluenum >= 100) {
            document.getElementById('button').style.display = 'none'
            document.getElementById('button1').style.display = 'none'
            document.getElementById('button2').style.display = 'block'
            document.getElementById("h2").innerHTML = "Congratulation <br/> Blue Won"
            document.getElementById("p").innerHTML = ""

            alert("Blue won");
        }
        let ab = bluenum.toString();

        //Jumping from one box to another box

        if (bluenum == 2 || bluenum == 8 || bluenum == 25 || bluenum == 59) {
            document.getElementById(ab).classList.remove("second")
        } else if (bluenum == 15 || bluenum == 47 || bluenum == 74 || bluenum == 88) {
            document.getElementById(ab).classList.remove("first")
        }
        document.getElementById(ab).classList.add("test5")
        document.getElementById(prev1).classList.remove("test5")
        prev1 = ab;

        //putting some delay on any ladder or snake action

        setTimeout(function() {
            if (bluenum == 2) {
                bluenum = 16;
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("second")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 8) {
                bluenum = 28
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("second")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 25) {
                bluenum = 56
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("second")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 59) {
                bluenum = 87
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("second")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else
            if (bluenum == 88) {
                bluenum = 38;
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("first")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 74) {
                document.getElementById(prev1).classList.add("first")
                bluenum = 66;
                let ab = bluenum.toString();
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 47) {
                bluenum = 27;
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("first")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            } else if (bluenum == 15) {
                bluenum = 4;
                let ab = bluenum.toString();
                document.getElementById(prev1).classList.add("first")
                document.getElementById(ab).classList.add("test5")
                document.getElementById(prev1).classList.remove("test5")
                prev1 = ab;
            }
        }, 1000);
    }, 1000)
}
//function for restart game

function roll2() {
    window.location.reload()
}