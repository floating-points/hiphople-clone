import express from "express";
import session from "express-session";
import passport from "passport";
import passportConfig from "./passport/index.js";
import path from "path";
import dotenv from "dotenv";
import flash from "connect-flash";

const router=express.Router();
const __dirname=path.resolve();

dotenv.config();

router.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.SESSION_SECRET
}));

router.use(express.urlencoded({extended:false}));
router.use(passport.initialize());
router.use(passport.session());
router.use(flash());

router.use("/", express.static(__dirname+"/server/loginView/index.html"));
router.use("/success", express.static(__dirname+"/server/loginView/success.html"));

passportConfig(passport);

router.post("/", passport.authenticate("local",
    { successRedirect: "/login/success",
    failureRedirect: "/login",
    failureFlash: "로그인 실패" })
);



export default router;