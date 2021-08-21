import {randomBytes} from "crypto";

const buf = randomBytes(64).toString("hex");
console.log(buf.length, buf);