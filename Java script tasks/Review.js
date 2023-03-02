//----------------------------------Interview Questions----------------------------------------//

// 1. Savol: JS nima ?
// Javobi: JS web saytning funksional qismiga javob beradi. Tugma bosilganda qandaydir hodisa yuz berishi va hokazo

// ==========================================================================================

// 2. Savol: Single Thread nima ? 
// -- JavaScript single thread yani bir vaqtning ozida faqat bitta malumot bilan ishlay oladi.
//  1-Misol:
// let a = 2;
// console.log(a++) //javob 2 chiqadi chunki javaScript single thread yani a ni ozini chiqaradi keyin ++ ishlaydi;
// 2-Misol:
// let b = 3;
// console.log(++b) //javob 3; Nema uchun 3 chiqyabdi chunki ++ bu arifmetik amal uni consolda chiqarib bolmaydi consolda b chiqariladi;

// ===========================================================================================

// 3 - Savol: variables nima? 
// Javobi: variables bu ozgaruvchi. Uning vazifasi qandaydir malumotni ozida saqlab turish yani biz ozaruvchini qutiga qiyos qilsak qutini ichiga malumot solib quyamiz va kerak bolgan vaqtda shu qutiga murojaat qilamiz bu bizga malumotlardan foydalanishni osonlashtiradi.

// ============================================================================================

// 4 - salvol: variableslarni necha xil usulda elon qilish mumkin?
// Javob: 3 xil Yani: var, let, const kalit sozlari orqali

// ============================================================================================

// 5 - savol: var, let, const ning bir biridan farqi ?
// Javob: var bilan variablesni elon qilsak:
// var a = 2; 
// var a = 3; // xotalik bermaydi;
// let bilan qilsak:
// let a = 4;
// let a = 6// Xatolik beradi; letdan foydalanish kerak var bugungi kunda ishlatilmaydi
// const bilan ishlash: qandaydir malumotni keyinchalik orzgartirishni istamasak constdan foydalanamiz
// const a = 5;
// a = 6; // bu holatda hatolik beradi;
// let a = 4;
// a = 5; // bunda esa yoq;

// ============================================================================================

// 6 - savol: primitive va non-primitive data typelarning farqi nimada?
// Javob: Asosiy farqi hotirada joylashuvida yani primitive togridan togri stackga borib tushadi non-primitive esa heep hotiraga borib tushadi stackda esan uning heep hotiradagi joylashgan orniga link beriladi 

// ===========================================================================================

// 7 - savol: Global variables nima?
// javob: functiondan tashqarida elon qilingan varibaleslar global variablesdir. Global variableslar javaScript codining istalgan joyida kirishi mumkin
