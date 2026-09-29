const nimi = "Opiskelija";

console.log("Hei " + nimi + "!");
const ika = 20;

if (ika >= 18) {
    console.log("Olet täysi-ikäinen.");
} else {
    console.log("Olet alaikäinen.");
}
function laskeAlennettuHinta(hinta) {
    const alennus = hinta * 0.10;
    return hinta - alennus;
}

const uusiHinta = laskeAlennettuHinta(100);

console.log("Alennettu hinta: " + uusiHinta + " €");
const tuotteet = ["Omena", "Banaani", "Appelsiini"];

tuotteet.forEach(function(tuote) {
    console.log("Tuote: " + tuote);
});
function naytaViesti() {
    alert("Hei! Painoit nappia!");
}
function haeNeuvo() {
    const neuvo = document.getElementById("neuvo");

    neuvo.textContent = "Haetaan neuvoja...";

    Promise.all([
        fetch("https://api.adviceslip.com/advice?1").then(response => response.json()),
        fetch("https://api.adviceslip.com/advice?2").then(response => response.json()),
        fetch("https://api.adviceslip.com/advice?3").then(response => response.json())
    ])
    .then(data => {
        neuvo.innerHTML = "";

        data.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item.slip.advice;
            neuvo.appendChild(p);
        });
    })
    .catch(error => {
        console.log(error);
        neuvo.textContent = "Tietojen hakeminen epäonnistui.";
    });
}
function haeKoira() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("koira").src = data.message;
        })
        .catch(error => {
            console.log(error);
        });
}
