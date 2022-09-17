// console.log("Clicking First Add-To-Cart")
// setTimeout(() => console.log("First Added To Cart!"), 1000);

// console.log("Clicking Second Add-To-Cart")
// setTimeout(() => console.log("Second Added To Cart!"), 1000);

// console.log("Clicking Third Add-To-Cart")
// setTimeout(() => console.log("Third Added To Cart!"), 1000);

// let username = undefined;
// setTimeout(() => {
//     console.log("Async code 1 started...")
//     console.log("Setting username to Ben")
//     username = "Ben";
//     console.log(`${username} is logged in!`);
// }, 0);
// console.log("Sync code done running...")




// console.log("Sync code started...")
// setTimeout(() => {
//     console.log("Async code 1 started...")
//     console.log("...Async code 1 ended")
// }, 1000);
// setTimeout(() => {
//     console.log("Async code 2 started...")
//     console.log("...Async code 2 ended")
// }, 500);
// setTimeout(() => {
//     console.log("Async code 3 started...")
//     console.log("...Async code 3 ended")
// }, 0);
// console.log("...Sync code ended")

const fs = require('fs');

const timeoutInOrderCB = async () => {
    console.log("Sync code started...")
    fs
        .promises
        .readFile('./ex1.txt', 'utf8')
        .then((data) => {
            console.log("Data", data);
        });
    console.log("...Sync code ended")
}

/**
 * This is an async action that runs our timeouts in order and returns nothing
 */
// function timeoutInOrder() {
//     console.log("Sync code started...");

//     const res1 = fs.promises.readFile('./ex1.txt', 'utf8');
//     console.log(res1);

//     const res2 = fs.promises.readFile('./ex2.txt', 'utf8');
//     console.log(res2);

//     const res3 = fs.promises.readFile('./ex3.txt', 'utf8');
//     console.log(res3);

//     console.log("...Sync code ended")
// }
// console.log("Before TIO")
// timeoutInOrder();
// console.log("After TIO")


const getInfoFromSecretFileCB = () => {
    // Grab name of secret file
    fs.promises
        .readFile('./secretFileName.txt', 'utf8')
        .then((secretFileName) => {
            console.log(secretFileName);
            // Read secret file
            fs.promises
                .readFile(`./${secretFileName}.txt`, 'utf8')
                .then((secret) => {
                    // Return result
                    console.log(secret);
                });
        });
};

const getInfoFromSecretFile = async () => {
    // Grab name of secret file
    const secretFileName = await fs.promises.readFile('./secretFileName.txt', 'utf8');

    console.log(secretFileName);

    // Read secret file
    const secret = await fs.promises.readFile(`./${secretFileName}.txt`, 'utf8');

    // Return result
    console.log(secret);
};

getInfoFromSecretFile();
