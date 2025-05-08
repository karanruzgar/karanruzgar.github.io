text = """Curious: Meraklı, Araştırmacı
Alien: Yabancı, Uzaylı
Odd: Tuhaf, Garip
Foreign: Yabancı, Dış
Different: Farklı, Değişik
Strange: Tuhaf, Acayip
Fresh: Taze, Yeni
Unique: Eşsiz, Benzersiz
Apathetic: İlgisiz, Duyarsız
Unusual: Olağandışı, Alışılmadık
Dissimilar: Benzeşmeyen, Farklı
Unexpected: Beklenmedik, Sürpriz
Treasured: Değerli, Kıymetli
Inquisitive: Meraklı, Sorgulayıcı
Native: Yerlisi, Doğal
Irregular: Düzensiz, Kuralsız
Unfamiliar: Yabancı, Tanıdık olmayan
Diverse: Çeşitli, Farklı
Extraterrestrial: Dünya dışı, Uzaylı
Inexperienced: Deneyimsiz, Tecrübesiz
Uncomfortable: Rahatsız, Huzursuz
Memento: Hatıra, Anı eşyası
Memo: Not, Kısa yazı
Memorandum: Bildiri, Resmi not
Memoir: Anı, Hatırat
Memorise: Ezberlemek, Hatırlamak
Memory: Hafıza, Anı
Memorable: Unutulmaz, Akılda kalan
Memorial: Anıt, Hatıra yeri
Memorabilia: Hatıralar, Anı eşyaları
Maturity: Olgunluk, Yetişkinlik
System: Sistem, Düzen
Scheme: Plan, Düzenek
Range: Aralık, Menzil
Variety: Çeşitlilik, Tür
Vulnerable: Savunmasız, Hassas
Breed: Tür, Yetiştirmek
Reproduce: Üremek, Çoğaltmak
Colony: Koloni, Sömürge
Historic: Tarihi, Önemli
Ancient: Antik, Eski
Sanctuary: Sığınak, Barınak
Asylum: Sığınma, Akıl hastanesi
Settlement: Yerleşim, Anlaşma
Slant: Eğiklik, Bakış açısı
Scale: Ölçek, Terazi"""
e = {}

for i in text.split("\n"):
    e[i.split(":")[0]] = i.split(": ")[1].split(", ")
# print(e)
print(text.replace("\n","</div></div>\n<div class='kelime'>").replace(":",":<div class='anlam'>").replace(",",", "))