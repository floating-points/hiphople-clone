import crypto from "crypto";

const buf = crypto.randomBytes(64).toString("hex");
console.log(buf.length, buf);