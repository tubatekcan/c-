function sayiUret(upBoundary = 50) {
    return Math.ceil(Math.random() * upBoundary);
}

console.log(sayiUret());// 1'den fazla sayı üretmek için döngü yazıyoruz



// 8 kolon (8 tane 6'lı sayı üret)


for (var i = 1; i <= 8; i++) {
    console.log(i+'. KOLON');
    for (var j = 1; j <= 6; j++) {
        console.log(sayiUret());
    }
    console.log(sayiUret());
}




