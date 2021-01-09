let rec;
if (!("webkitSpeechRecognition" in window)) {
    alert("Désolé, votre navigateur ne prend pas en charge l'API");
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "fr-FR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", iniciar);
}
function iniciar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
    }
}


rec.start();