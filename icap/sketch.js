var pics;

function preload()
{
  pics= loadImage('foto.jpg');
}


function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
Hpage();


}


function Hpage()
{
 background(128,0,128);
 image(pics,window.innerWidth/2,window.innerHeight/2);  
 curtxt=createP('Эн мин сурэхпэр');
 curtxt.position(window.innerWidth/2,window.innerHeight-50);
 curtxt.style("color","#ffffff");
 curtxt.style("font","bold 16px arial, sans-serif"); 
}
