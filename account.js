
const moment = require("moment"); 
class Account {
    //state
    #amount;
    #account_id;
    //constructor
    constructor(name, amount, account_id) {
      this.name = name;
      this.#amount = amount;
      this.#account_id = account_id;
    }
    //Method

    tellMeBalance() {
      console.log(`Sizning hisobingizdagi qoldiq $${this.#amount}`);
      return this.#amount;
    }
    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hisobingizdan $${amount} yechildi. Hisobingizda qoldiq ${this.#amount} time:${moment().format("YYYY-MM-DD HH:mm")}`);
        }else {
            console.log(`Hisobingizda mablag' yetarli emas: $${this.amount} time:${moment().format("YYYY-MM-DD HH:mm")}`);
        }
    }
    makeDeposit(amount){
        this.#amount += amount;
        console.log(`Hisobingiz $${amount}ga to'dirildi. Joriy hisobingiz ${this.#amount}ni tashkil etadi time:${moment().format("YYYY-MM-DD HH:mm")}`);
    }

    giveMeDetails(){
        console.log(`Assalomu alaykum hurmatli ${this.name}! Sizning hisobingizda $${this.#amount}USD mavjud time:${moment().format("YYYY-MM-DD HH:mm")}`);
        console.log(`hisob raqamingiz: ${this.#account_id}`);
    }

    static tellMeAboutClass() {
        console.log(`Bu yangi accountlar yaratish uchun xizmat qiluvchi class`);
    }
    static tellmeTime(){
        console.log(`joriy vaqt (mahalliy vaqt bo'yicha): ${moment().format("YYYY-MM-DD HH:mm")} `);
    }
  
  } 

  module.exports = Account;

