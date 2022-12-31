

//const inquirer = require('inquirer');
//inquirer
   // .prompt([{type: 'input', name: 'raqam', message: 'raqamni kiriting'}])
  //  .then((answer) => {
  //      console.log("biz kiritgan son qiymati: ", answer.raqam);
 //   })
  //  .catch(err => console.log(err));

//const validator = require('validator');
//const test = validator.isIP('255.255.255.255');
//console.log(test);


const { v4:  uuidv4 } = require('uuid');
const random = uuidv4();
console.log("random number:", random);
const chalk = require('chalk');
console.log(chalk.blue("hello ") + chalk.yellow(random) + chalk.red(" !"))

