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
 image(pics,window.innerWidth/2,0);    
}
