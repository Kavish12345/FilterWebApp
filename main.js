
var nosex=0;
var nosey=0;

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResult);
}
function take_snapshot(){
    save('filter.png');
}

function draw(){
    image(video,0,0,400,400);
    image(clown_image,nosex,nosey,30,30);
}

function modelLoaded(){
    console.log("PoseNet Initialized");
}

function gotResult(results){
if(results.length > 0){
    console.log(results);
    nosex=results[0].pose.nose.x-20;
    nosey=results[0].pose.nose.y;
    console.log("Nose X ="+nosex);
    console.log("Nose Y ="+nosey);
}
}
function preload(){
    clown_image=loadImage('https://i.postimg.cc/x8zHkcN2/m.png');
}