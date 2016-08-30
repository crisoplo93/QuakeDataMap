var loginButton,logn, passn;
var curtxt, logtxt, passtxt;
var iesslogo;

function preload()
{
  iesslogo= loadImage('pics/liess.png');
}


function setup() {
 createCanvas(1366,600);
Hpage();


}

function draw() {



}

function Hpage()
{
  stroke(0,0,0,50);
  fill(255,255,255);
    rect(405,75,540,400);
  fill(37,35,35);
    rect(0,0,1366,40);
    fill(51,82,240);
    curtxt=createP('Capacitación IESS');
    curtxt.position(20,-5);
    curtxt.style("color","#ffffff");
    curtxt.style("font","bold 16px arial, sans-serif");

    noStroke();
    rect(0,40,1366,5);

    image(iesslogo, 450,105);
    loginButton= createButton('Iniciar sesión');
    loginButton.position(450,420);
    loginButton.mousePressed(loginb);
    logn= createInput();
    logn.position(450,380);
    logn.size(300,20);


}

 function loginb()
 {
  clear();
  loginButton.hide();
 }
