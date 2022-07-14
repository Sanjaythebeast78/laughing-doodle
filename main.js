function preload(){

}

function setup(){
canvas=createCanvas(600,600)
canvas.position(600,170)

video =createCapture(VIDEO)
video.size(550,560)

poseNet = ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotposes)

}
function modelLoaded(){
    console.log("poseNet is ready")
}

function draw(){

}
function gotposes(error,results){
    if (error){
console.log(error)
    }
    else {
        console.log(results)
    }
}