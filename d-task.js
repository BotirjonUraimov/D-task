const Account = require('./account.js')
const moment = require("moment"); 
class market {
//Stack
 #amountMeat;
 #amountSunFlowerOil;
 #amountBread;
 #amountSugur;
//constructor
    constructor(meat, oil, bread, sugar){
        this.#amountMeat = meat;
        this.#amountSunFlowerOil = oil;
        this.#amountBread = bread;
        this.#amountSugur = sugar;
    }

//methods
residuals(){
    console.log(`hozir soat ${moment().format("HH:mm")} holatiga ombordagi mavjud mahsulotlat qoldig'i
    ${this.#amountMeat}kg go'sht
    ${this.#amountSunFlowerOil}L yog' 
    ${this.#amountBread}ta non
    ${this.#amountSugur}kg shakar`)
}
addProducts(product, quantity){
    
    if(product == "meat") {
        this.#amountMeat += quantity;
        console.log(`${quantity}kg go'sht kirim qilindi. 
        Qoldiq: ${this.#amountMeat}kg`);
    } else if (product == "oil") {
        this.#amountSunFlowerOil += quantity;
        console.log(`${quantity}L yog' kirim qilindi. 
        Qoldiq: ${this.#amountSunFlowerOil}L`);
    } else if (product =="bread"){
        this.#amountBread += quantity;
        console.log(`${quantity}ta non kirim qilindi. 
        Qoldiq: ${this.#amountBread}ta`);
    } else if (product == "sugur"){
        this.#amountSugur += quantity;
        console.log(`${quantity}kg shakar kirim qilindi. 
        Qoldiq: ${this.#amountSugur}kg`);
    } else {console.log("Bunday mahsulot mavjud emas")};
}
sellProduct(product, quantity) {
    if(product == "meat") {
        this.#amountMeat -= quantity;
        console.log(`${quantity}kg go'sht sotildi. 
        Qoldiq: ${this.#amountMeat}kg`);
    } else if (product == "oil") {
        this.#amountSunFlowerOil -= quantity;
        console.log(`${quantity}L yog' sotildi. 
        Qoldiq: ${this.#amountSunFlowerOil}L`);
    } else if (product =="bread"){
        this.#amountBread -= quantity;
        console.log(`${quantity}ta non sotildi. 
        Qoldiq: ${this.#amountBread}ta`);
    } else if (product == "sugur"){
        this.#amountSugur -= quantity;
        console.log(`${quantity}kg shakar sotildi. 
        Qoldiq: ${this.#amountSugur}kg`);
    } else {console.log("Bunday mahsulot mavjud emas")};
}
}

//let newShop = new market(12, 5, 23, 7);
//newShop.residuals();
//console.log("********* 1 *********");
//newShop.addProducts('meat', 4);
//newShop.addProducts('oli', 1);
//console.log("********* 2 *********");
//newShop.sellProduct('bread', 8)
//newShop.sellProduct('sugur', 6)
//newShop.sellProduct('meat', 3)

//console.log("********* 3 *********");
//newShop.residuals();



const uraimov = new Account("Botir", 2000000, 508321344654);
uraimov.giveMeDetails();
Account.tellMeAboutClass();

