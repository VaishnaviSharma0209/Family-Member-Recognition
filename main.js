function me(){
    document.getElementById("me").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("me").style.display="none";
    },3000)
}
function sis(){
    document.getElementById("sis").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("sis").style.display="none";
    },3000)
}
function mom(){
    document.getElementById("mom").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("mom").style.display="none";
    },3000)
}
function dad(){
    document.getElementById("dad").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("dad").style.display="none";
    },3000)
}
function grandma(){
    document.getElementById("grandma").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("grandma").style.display="none";
    },3000)
}
function grandpa(){
    document.getElementById("grandpa").style.display="inline-block";
    setTimeout(function(){
        document.getElementById("grandpa").style.display="none";
    },3000)
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
    })
}

console.log("ml5 Version",ml5.version);
classifier=ml5.imageClassifier('///',modelLoaded);
function download(){
    link=document.getElementById("link");
    image=document.getElementById("image").src;
    link.href=image;
    link.click();
}