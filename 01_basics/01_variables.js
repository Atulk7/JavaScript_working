const accountId = 144553;
let accountEmail = "atulkevat7@gmail.com";
var accountPasssword = "12345";// we can not use var because of issue in block scope and functional scope.
accountCity = "Jaipur"// don't preferred
let accountState;

// const : - we can't change value of const type varibles;
//accountId = 2;// not allowed generate below error!!
console.log(accountId);

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/workspaces/JavaScript_working/01_basics/01_variables.js:8:11)
//     at Module._compile (node:internal/modules/cjs/loader:1254:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
//     at Module.load (node:internal/modules/cjs/loader:1117:32)
//     at Module._load (node:internal/modules/cjs/loader:958:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47


accountEmail = "hc@hc.com";
accountPasssword = "00000";
accountCity = "M.P";

console.table([accountId,accountEmail,accountPasssword,accountCity,accountState]);
