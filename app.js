let rednum=0;
let bluenum=0;
let prev="0";
function roll(){
    document.getElementById("button").style.display="none"
    document.getElementById("button1").style.display="block"
    let val=Math.floor((Math.random() * 6)+1);
    rednum+=val;
    if(rednum>100){
        rednum-=val;
        prev="0"
    }
    if(bluenum>=100){
        console.log("blue won");
        // return
    }
    document.getElementById("h2").innerHTML="red got" + " " +val;
    let ab=rednum.toString();
    document.getElementById(ab).style.backgroundColor="red"
    document.getElementById(prev).style.backgroundColor="aqua"
    prev=ab;
   
    

  console.log(rednum)

}
let prev1="0";

function roll1(){

    let val=Math.floor((Math.random() * 6)+1);
    document.getElementById("h2").innerHTML="blue got" +" " + val;
    bluenum+=val;
    if(bluenum>100){
        bluenum-=val;
        prev1="0"

    }
    if(rednum>=100){
        console.log("Red won");
        
    }
    document.getElementById("button1").style.display="none";
    document.getElementById("button").style.display="block";
    // let a=document.getElementById("test3").getAttribute('value');
let ab=bluenum.toString();
  
    document.getElementById(ab).style.backgroundColor="blue"
    document.getElementById(prev1).style.backgroundColor="aqua"
    prev1=ab;
    
    
    
}
