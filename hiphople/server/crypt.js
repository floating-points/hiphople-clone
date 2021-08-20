import {pbkdf2} from "crypto";

pbkdf2("witch-work", "salt", 65536, 64, "sha512", (err, derivedKey) => {
    if (err) {
        throw err;
    }
    //에러 발생시 핸들링
    console.log(derivedKey.toString("hex"));
});