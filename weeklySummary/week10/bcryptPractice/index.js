const bcrypt = require("bcrypt");


const getPassword = async () => {
    const password = "LouisIsAwesome";
    const password2 = "WiggletIsGreat";
    const SALT = 3;

    const hash = await bcrypt.hash(password, SALT);
    const sameHash = await bcrypt.hash(password, SALT);
    const hash2 = await bcrypt.hash(password2, SALT);

    console.log({
        hash,
        sameHash
    })

    console.log({ password, hash });
    console.log({ password2, hash2 });


    // ....
    const works = await bcrypt.compare(password, hash);
    const notWorks = await bcrypt.compare("WrongPassword", hash);

    console.log({
        works,
        notWorks
    })
}


getPassword();