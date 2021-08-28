function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.parent("video_container");

    canvas = createCanvas(550, 500);
    canvas.position(175, 35)
    canvas.parent("canvas_container");

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function draw() {
    background('#492839');
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
    }
}