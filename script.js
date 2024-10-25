const value = 42;
// Yukarıdaki value değişkeninin tipini nasıl öğrenirsin?
console.log(typeof value);

const name = "Merhaba Dünya";
// Yukarıdaki name değişkeninin uzunluğunu bulmak için hangi metodu kullanırsın? Kod ile göster.
console.log(name.length);

const city = "istanbul";
// Yukarıdaki city string’ini büyük harflere çevirmek için hangi metodu kullanırsın?
console.log(city.toUpperCase());

const number = 42.5;
// number değişkeninin tam sayı olup olmadığını kontrol eden bir fonksiyon yaz.
console.log(Number.isInteger(number));

const fruits = ["elma", "armut"];
const vegetables = ["havuç", "lahana"];
// fruits ve vegetables dizilerini birleştirip tek bir dizi haline getiren bir yöntem kullan.
console.log(fruits.concat(vegetables));

const userInput = "    JavaScript öğreniyorum    ";
// userInput değişkeninin başındaki ve sonundaki boşlukları silmek için hangi metodu kullanırsın?
console.log(userInput.trim());

const num = 123;
// num değişkenini string tipine çeviren bir yöntem göster.
console.log(num.toString());

const mixedArray = [42, "JavaScript", true, null];
// mixedArray dizisindeki her elemanın tipini typeof kullanarak kontrol eden bir döngü yaz.
mixedArray.forEach(x => console.log(typeof(x)));



const decimalNumber = 5.6789;
// decimalNumber değişkenini 2 ondalık basamağa yuvarlayan bir kod yaz.
console.log(decimalNumber.toFixed(2));

const sentence = "JavaScript çok eğlenceli!";
// sentence değişkeni içinde "eğlenceli" kelimesini içerip içermediğini kontrol eden bir yöntem yaz.
console.log(sentence.includes("eğlenceli"));

const greeting = "Merhaba Dünya";
// greeting değişkeninde "Dünya" kelimesini "Evren" olarak değiştiren bir yöntem yaz.
console.log(greeting.replace('Dünya','Evren'));

const floatNumber = 4.7;
// Yukarıdaki floatNumber değişkenini en yakın tam sayıya yuvarlayan bir yöntem yaz.
console.log(Math.round(floatNumber));

const colors = ["kırmızı", "yeşil"];
// colors dizisinin sonuna "mavi" rengini ekleyen bir yöntem yaz.
colors.push('mavi');
console.log(colors);

const words = "Elma, Armut, Muz";
// words string’ini virgüllerle ayrılmış bir dizi haline getir.
console.log(words.split(", "));

const animals = ["kedi", "köpek", "kuş"];
// animals dizisinin sonundaki elemanı silen bir yöntem yaz.
animals.pop();
console.log(animals)

const text = "JavaScript harika!";
// text içinde "HARİKA" kelimesini, büyük/küçük harf farkını göz ardı ederek arayan bir yöntem yaz.
const regex = /harika/i;
const sonuc = regex.test(text);
console.log(sonuc);

const numara = 4.9;
// numara değişkenini aşağıya doğru en yakın tam sayıya yuvarlayan bir yöntem yaz.
const yuvarlanmis = Math.floor(numara);
console.log(yuvarlanmis);

const tech = ["JavaScript", "Python", "Ruby"];
// tech dizisinin içinde "Python" olup olmadığını kontrol eden bir yöntem yaz.
const varMi = tech.includes("Python");
console.log(varMi);

const phrase = "JavaScript öğreniyorum!";
// phrase string’inin son karakterini bulan bir yöntem yaz.
const sonKarakter = phrase[phrase.length - 1];
console.log(sonKarakter);

const quote = "Hayatta en hakiki mürşit ilimdir.";
// quote string’inin 7. karakterinden itibaren kalan kısmını alıp yazdıran bir yöntem yaz.
console.log(quote.slice(7));

const zorSoru = "JavaScript seviyorum çünkü JavaScript çok güçlü.";
// zorSoru içinde "JavaScript" kelimesinin kaç kez geçtiğini bulan bir yöntem yaz.
const kacKere = zorSoru.split("JavaScript").length -1;
console.log(kacKere);