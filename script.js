kelimeler = {'challenge': ['meydan okuma', 'imtihan', 'zorlu iş', 'zorluk'], 
'attitude': ['tutum', 'tavır', 'duruş'],
'confusion': ['karmaşa', 'kargaşa', 'şaşkınlık', 'karışıklık'],
'transformation': ['dönüşüm', 'dönüştürme'],
'occur': ['meydana gelmek', 'olmak', 'vuku bulmak'],
'adolescent': ['ergen', 'gençlik', 'genç', 'ergenlik'],
'alteration': ['değişiklik', 'değişim'],
'vulnerable': ['savunmasız', 'yaralanabilir', 'yatkın', "korumasız"], 
'span': ['karış', 'süre'], 
'unstable': ['istikrarsız', 'kararsız', 'dengesiz'], 
'aspect': ['hal', 'taraf', 'yön', 'açı', 'görünüş'], 
'conflict': ['anlaşmazlık', 'çekişme', 'çatışma'], 
'integrate': ['entegre etmek', 'kaynaştırmak', 'birleştirmek', 'dahil etmek'], 
'integration': ['bütünleme', 'birleştirme', 'birleşme', 'entegrasyon'], 
'relate': ['nakletmek', 'bağlı olmak', 'arasında bağlantı kurmak', 'ilgili olmak'], 
'consistent': ['istikrarlı', 'tutarlı'], 
'affection': ['alaka', 'etki', 'meyil', 'eğilim'], 
'behave': ['davranmak'], 
'independence': ['özgürlük', 'bağımsızlık'], 
'boundaries': ['sınırlar'], 
'adolescence': ['ergenlik'], 
'announce': ['anons etmek', 'duyurmak'], 
'confirm': ['onaylamak', 'doğrulamak'], 
'detect': ['saptamak', 'bulmak', 'keşfetmek', 'sezmek', 'tespit etmek'], 
'echolocation': ['ekolokasyon', 'sesle yer belirleme'], 
'bounce': ['sekmek', 'zıplamak'], 
'capable': ['yetenekli', 'becerikli', 'kabiliyetli'], 
'recognise': ['tanımak'], 
'evolve': ['evrim geçirmek', 'evrimleşmek'], 
'relatively': ['nispeten', 'oranla', 'görece'], 
'involuntary': ['istemsiz'], 
'sustain': ['güç vermek', 'sürdürmek', 'ayakta tutmak'], 
'vegetative': ['istem dışı çalışan', 'hareketsiz', 'durgun', 'bitkisel'], 
'conscious': ['bilinçli'], 
'exposure': ['maruz bırakma', 'maruz kalma'], 
'debate': ['çekişme', ' tartışma'], 
'condition': ['hal', 'koşul', 'durum', 'şart'], 
'praise': ['övgü', 'övmek'], 
'reject': ['geri çevirmek', 'reddetmek'], 
'claim': ['talep etmek', 'iddia etmek', 'istek'], 
'sequence': ['sıra', 'dizi', 'silsile'], 
'recent': ['son', 'yeni', 'en son'], 
'emphasise': ['vurgulamak'], 
'acquire': ['elde etmek', 'edinmek'], 
'feedback': ['geri bildirim'], 
'interaction': ['etkileşim'], 
'reception': ['alış', 'tepki', 'resepsiyon'], 
'exceed': ['sınırı aşmak'], 
'significantly': ['önemli ölçüde', 'önemli', 'önemli derecede'], 
'purposefully': ['bilerek', 'isteyerek', 'kasıtlı'], 
'admire': ['hayranlık duymak', 'beğenmek']};
var kelimeyeri = document.getElementById("kelime");


var soru = Object.keys(kelimeler)[Math.floor(Math.random() * Object.keys(kelimeler).length)];
kelime.innerHTML = soru;
function play(){
    cevap = document.getElementById("cvp").value.toLowerCase();
    document.getElementById("cvp").value = "";
    document.getElementById("cvp").focus()
    if(kelimeler[soru].includes(cevap)){
        document.getElementById("info").style = "color:green";
        document.getElementById("info").innerHTML = "Doğru!<br>"+soru+": "+kelimeler[soru];
    }
    else{
        document.getElementById("info").style = "color:red";
        document.getElementById("info").innerHTML = "Yanlış!<br>"+soru+": "+kelimeler[soru];
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
