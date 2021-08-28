noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 170);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes)
}

function draw() {
    background('#492839');
    document.getElementById("w7h").innerHTML = "The Width and Height Of Square is " + difference + " Pixels";
    fill("powderblue");
    stroke("darkslategrey");
    strokeWeight(5)
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("Nose X is " + noseX + " and Nose Y is " + noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X is " + leftWristX + " and Right Wrist X is " + rightWristX + " And So the Difference is " + difference);
    }
}