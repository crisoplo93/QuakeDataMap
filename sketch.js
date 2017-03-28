var mapimg;
var lon;
var lat;
var p1="https://api.mapbox.com/styles/v1/mapbox/streets-v8/static/0,15,1/"
var mapwidth=1024;
var p2="x"
var mapheight=512;
var p3="?access_token=";
var token="pk.eyJ1IjoiY3Jpc29wbG85MyIsImEiOiJjaXo4bW5yOW8wMDBxMnFydmF5ZHFucXNxIn0.pUafasx7ygE3Gs8Vc9Mfyg";
var imglink=p1+mapwidth+p2+mapheight+p3+token;
var eqdt;
//-0.180653, -78.467834
var zoom=1;
function translon(lon)
{
lon=radians(lon);
var a=(256/PI)*pow(2,zoom);
var b =lon+PI;
return a*b;
}
function translat(lat)
{
lat=radians(lat);
 var a=(256/PI)*pow(2,zoom);
 var b=tan(PI/4 + lat/2);
 var c=PI-log(b);
 return a*c;
}
function preload()
{
  mapimg= loadImage(imglink);
  eqdt=loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv");

}

function setup() {
 createCanvas(window.innerWidth,window.innerHeight);
 imageMode(CENTER);
 background(242,169,24);
 translate(window.innerWidth/2,window.innerHeight/2);
 image(mapimg,0,0);
 var cx=translon(0);
 var cy=translat(15);
 for (var i=1; i < eqdt.length; i++)
 {
   var data = eqdt[i].split(/,/);
   lat = data[1];
   lon = data[2];
   var mag=data[4];
   var x=translon(lon)-cx;
   var y=translat(lat)-cy;
   if (mag>6)
   {
   fill(255,0,0);
   }
   else if(mag<=6 && mag>3)
   {
     fill(255,128,0);
   }
   else if (mag<=3 && mag>1)
   {
     fill(255,255,0);
   }
   else if(mag<=1)
   {
     fill(0,255,0);
   }
   ellipse(x,y,7,7);
 }

}
