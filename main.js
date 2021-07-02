function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(520, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#FFAF8A")
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}