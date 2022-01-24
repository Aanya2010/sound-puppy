function start() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    noise= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qhJXJMj9p/model.json', modelloaded);
}

function modelloaded() {
    noise.classify(gotresults); 
}
var dog=0;
var cat=0;
function gotresults(error, results) {
    if(error){
console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("hear").innerHTML='i can hear: ' + results[0].label;
        document.getElementById("count").innerHTML='dog detected-'+dog+' cat detected-'+cat;

        img1=document.getElementById("al1");

        if (results[0].label=="cat meowing"){
            img1.src='cat.gif';
            cat=cat+1;
        }

        else  if (results[0].label=="dog barking"){
            img1.src='dog.gif';
            dog=dog+1;
        }
        else {
            img1.src='hear.gif';
        }
    }
}