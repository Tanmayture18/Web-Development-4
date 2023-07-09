// Creating Random indices in the range of 0,5
var a=Math.random()*6;
a=Math.floor(a);

var b=Math.random()*6;
b=Math.floor(b);

// Array of image paths
var arr=["images/dice6.png","images/dice5.png","images/dice4.png","images/dice3.png","images/dice2.png","images/dice1.png"]
var score=[6,5,4,3,2,1]

//storing scores of a,b 
var a_score=score[a];
var b_score=score[b];

// We are going to manipulate HTMl attributes
document.querySelector(".img1").setAttribute("src",arr[a])
document.querySelector(".img2").setAttribute("src",arr[b])

// Using if else statemnets with text manipulation
if (a_score>b_score){
    document.querySelector("h1").textContent="A is Winner";
}else if (b_score>a_score){
    document.querySelector("h1").textContent="B is Winner";
}else{
    document.querySelector("h1").textContent="Match Tie";

}
