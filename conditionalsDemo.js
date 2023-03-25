var sayi1 = 31
var sayi2 = 35
var sayi3 = 2

//En büyük sayıyı bulunuz

var enBuyuk = sayi1
if(enBuyuk < sayi2){
    enBuyuk = sayi2
}
if(enBuyuk < sayi3){
    enBuyuk = sayi3
}
console.log(enBuyuk)

if(sayi1 >= sayi2 && sayi1 >= sayi3){
    console.log('EN büyük sayi : ' + sayi1)
}else if(sayi2 >= sayi3){
    console.log('EN büyük sayi : ' + sayi2)
}else{
    console.log('EN büyük sayi : ' + sayi3)
}