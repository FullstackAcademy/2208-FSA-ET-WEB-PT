const fs = require('fs');

const excelJS = require('excelJS');
console.log(excelJS);

fs.readFile("userInfo.txt", (err, res) => {
    console.log(res)
    const lines = res.toString();
    console.log(lines);
});


const users = [
    { username: "Ben", password: "123" },
    { username: "Louis", password: "456" },
    { username: "Larry", password: "789" }
]


users.forEach(user => {
    const fileName = "userInfo/" + user.username + "Info.txt";
    const data = user.password;

    fs.writeFile(fileName, data, (err) => {
        if (err) console.log(err);
        else console.log(`File ${fileName} written! All is well!`)
    })
})
