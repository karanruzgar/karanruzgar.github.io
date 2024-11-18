text = """Thrive(ing):Başarılı olmak,Gelişmek
Implication:İma,Etki
Coworking:Ortak çalışma
Entrepreneur:Girişimci
Freelance:Serbest (çalışan)
Relevant:İlgili,Alakalı
Remote:Uzaktan
Incorporate:Dahil etmek,Birleştirmek
Communal:Ortak,Toplumsal
Enterprise:Girişim,Şirket
Venture:Girişim,Riskli iş
On-demand:Talebe bağlı
Competition:Rekabet
Distribute:Dağıtmak
Internal:Dahili,İç
Witness:Şahit olmak,Gözlemlemek
Persona:Kişilik,Kimlik
Affiliate:Bağlı kuruluş,Ortak olmak
Amidst:Ortasında
Sparks:Kıvılcımlar
Norm:Kural,Standart
Innovation:Yenilik
Derive:Türetmek,Çıkarmak
Pain point:Sorun noktası
Concrete:Somut
Insight:Kavrayış,İçgörü
Inherent:Doğasında olan,İçsel
Feedback:Geri bildirim
Articulate:Açıkça ifade etmek
Pursue:Takip etmek,Peşinden gitmek
Aspire:Amaçlamak,Arzu etmek
Corporate:Kurumsal
Collaboration:İş birliği
Layout:Düzen,Tasarım
Sustainability:Sürdürülebilirlik
Craft (v):İşlemek,Yapmak
Collaborative:Ortak çalışmaya dayalı
Well-curated:Özenle seçilmiş,Düzenlenmiş
Interaction:Etkileşim
Counterpart:Karşılık,Denk
Opposed:Karşı,Karşıt
Substantial:Önemli,Büyük
Nondescript:Belirsiz,Tanımsız
Underestimate:Hafife almak
Vibe:Hava,His
Cultivate:Geliştirmek,Ekip biçmek
Unique:Benzersiz
Respective:İlgili,Kendine özgü
Element:Unsur,Öge
Hospitality:Misafirperverlik
Constantly:Sürekli
Facilitating:Kolaylaştırma
Cultivate:Geliştirmek,Üzerine çalışmak"""
e = {}

for i in text.split("\n"):
    e[i.split(":")[0]] = i.split(":")[1].split(",")
# print(e)
print(text.replace("\n","</div></div>\n<div class='kelime'>").replace(":",":<div class='anlam'>").replace(",",", "))