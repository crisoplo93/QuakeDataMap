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
 background(128,100,128);
 image(pics,0,0);    
}
