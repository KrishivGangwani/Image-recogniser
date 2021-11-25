Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'">';
    });
}

console.log("ml5 version is ",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5AypZOpYP/model.json',model_loaded);

function model_loaded(){
    console.log("Model started");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("object_name").innerHTML = result[0].label;
    document.getElementById("object_acc").innerHTML  = result[0].confidence.toFixed(2);
}
    

}