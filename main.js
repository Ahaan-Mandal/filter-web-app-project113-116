mustacheX=0;
mustacheY=0;

function preload() {
mustache=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,mustacheX,mustacheY,50,50);
}

function take_snapshot(){
    save('my_clown_nose_filter.png');
}




function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if (results.length > 0) {
        mustacheX=results[0].pose.nose.x-20;
        mustacheY=results[0].pose.nose.y-20;
        console.log("mustache x=" + noseX);
        console.log("mustache y=" + noseY);
    }
}