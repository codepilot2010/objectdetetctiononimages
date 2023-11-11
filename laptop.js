status=""
function preload()
{
    img=loadImage('laptop.jpeg');
}
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : detecting objects"
}
function modelLoaded()
{
    console.log("model is loaded");
    status1=true;
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects=results;
    }
}