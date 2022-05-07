Img="";
status="";
object=[];
function preload(){
Img=loadImage("livingroom.jpeg");
}

function setup(){
Canvas=createCanvas(650,600);
Canvas.position(550,150);
objectdetector=ml5.objectDetector("cocossd",modelloaded);
 document.getElementById("status").innerHTML="status-detecting objects";
}

function draw(){
image(Img,0,0,650,600);
if(status!=""){
for(i=0;i<object.length;i++){
document.getElementById("status").innerHTML="status-object detected";
fill("red");
percent=floor(object[i].confidence*100);
text(object[i].label+" " +percent+"%",object[i].x,object[i].y);
noFill();
stroke("red");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
}    
}

}

function modelloaded(){
console.log("model is loaded");
status=true;
objectdetector.detect(Img,gotresult);
}

function gotresult(error,results){
if(error){
console.log(error);
}  
console.log(results);
object=results;

}


