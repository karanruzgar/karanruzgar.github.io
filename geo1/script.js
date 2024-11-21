kelimeler = {'Kanada': 'Ottawa', 'Portekiz': 'Lisbon', 'Brezilya': 'Brasilia', 'Rusya': 'Moscova', 'Bulgaristan': 'Sofya', 'Belçika': 'Brüksel', 'Arjantin': 'Buenos Aires', 'Luksemburg': 'Luksemburg', 'Pakistan': 'İslamabad', 'Venezuela': 'Caracas', 'Jamaica': 'Kingston', 'İrlanda': 'Dublin', 'Kuzey İrlanda': 'Belfast', 'Yunanistan': 'Atina', 'Çin': 'Pekin'}
var kelimeyeri = document.getElementById("kelime");

var dogrusayisi = 0
var soru = Object.keys(kelimeler)[Math.floor(Math.random() * Object.keys(kelimeler).length)];
kelime.innerHTML = soru;
function play(){
    cevap = document.getElementById("cvp").value.toLowerCase();
    document.getElementById("cvp").value = "";
    document.getElementById("cvp").focus()
    if(kelimeler[soru].toLowerCase().includes(cevap)){
        document.getElementById("info").style = "color:green";
        document.getElementById("info").innerHTML = "Doğru!<br>"+soru+": <b>"+kelimeler[soru]+"</b>";
        dogrusayisi+=1
    }
    else{
        document.getElementById("info").style = "color:red";
        document.getElementById("info").innerHTML = "Yanlış!<br>"+soru+": <b>"+kelimeler[soru]+"</b>";
    };
    soru = Object.keys(kelimeler)[Math.floor(Math.random() * Object.keys(kelimeler).length)];
    kelime.innerHTML = soru;


};
cevap = document.getElementById("cvp").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buton").click();
  }
});