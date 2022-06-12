Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#cameraContainer');
camera = document.getElementById("cameraContainer");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshotContainer").innerHTML = '<img id="snapshotImage" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-mi-EMR5i/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}