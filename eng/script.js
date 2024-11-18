kelimeler = {'Thrive(ing)': ['Başarılı olmak', 'Gelişmek'], 'Implication': ['İma', 'Etki'], 'Coworking': ['Ortak çalışma'], 'Entrepreneur': ['Girişimci'], 'Freelance': ['Serbest (çalışan)'], 'Relevant': ['İlgili', 'Alakalı'], 'Remote': ['Uzaktan'], 'Incorporate': ['Dahil etmek', 'Birleştirmek'], 'Communal': ['Ortak', 'Toplumsal'], 'Enterprise': ['Girişim', 'Şirket'], 'Venture': ['Girişim', 'Riskli iş'], 'On-demand': ['Talebe bağlı'], 'Competition': ['Rekabet'], 'Distribute': ['Dağıtmak'], 'Internal': ['Dahili', 'İç'], 'Witness': ['Şahit olmak', 'Gözlemlemek'], 'Persona': ['Kişilik', 'Kimlik'], 'Affiliate': ['Bağlı kuruluş', 'Ortak olmak'], 'Amidst': ['Ortasında'], 'Sparks': ['Kıvılcımlar'], 'Norm': ['Kural', 'Standart'], 'Innovation': ['Yenilik'], 'Derive': ['Türetmek', 'Çıkarmak'], 'Pain point': ['Sorun noktası'], 'Concrete': ['Somut'], 'Insight': ['Kavrayış', 'İçgörü'], 'Inherent': ['Doğasında olan', 'İçsel'], 'Feedback': ['Geri bildirim'], 'Articulate': ['Açıkça ifade etmek'], 'Pursue': ['Takip etmek', 'Peşinden gitmek'], 'Aspire': ['Amaçlamak', 'Arzu etmek'], 'Corporate': ['Kurumsal'], 'Collaboration': ['İş birliği'], 'Layout': ['Düzen', 'Tasarım'], 'Sustainability': ['Sürdürülebilirlik'], 'Craft (v)': ['İşlemek', 'Yapmak'], 'Collaborative': ['Ortak çalışmaya dayalı'], 'Well-curated': ['Özenle seçilmiş', 'Düzenlenmiş'], 'Interaction': ['Etkileşim'], 'Counterpart': ['Karşılık', 'Denk'], 'Opposed': ['Karşı', 'Karşıt'], 'Substantial': ['Önemli', 'Büyük'], 'Nondescript': ['Belirsiz', 'Tanımsız'], 'Underestimate': ['Hafife almak'], 'Vibe': ['Hava', 'His'], 'Cultivate': ['Geliştirmek', 'Üzerine çalışmak'], 'Unique': ['Benzersiz'], 'Respective': ['İlgili', 'Kendine özgü'], 'Element': ['Unsur', 'Öge'], 'Hospitality': ['Misafirperverlik'], 'Constantly': ['Sürekli'], 'Facilitating': ['Kolaylaştırma']}
var kelimeyeri = document.getElementById("kelime");


var soru = Object.keys(kelimeler)[Math.floor(Math.random() * Object.keys(kelimeler).length)];
kelime.innerHTML = soru;
function play(){
    cevap = document.getElementById("cvp").value.toLowerCase();
    document.getElementById("cvp").value = "";
    document.getElementById("cvp").focus()
    if(kelimeler[soru].includes(cevap)){
        document.getElementById("info").style = "color:green";
        document.getElementById("info").innerHTML = "Doğru!<br>"+soru+": <b>"+kelimeler[soru]+"</b>";
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