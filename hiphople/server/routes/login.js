import express from "express";
import path from "path";
import passport from "passport";

const router=express.Router();
const __dirname=path.resolve();

router.use("/", express.static(__dirname+"/server/loginView/index.html"));
router.use("/success", express.static(__dirname+"/server/loginView/success.html"));

router.post("/", passport.authenticate("local",
    { successRedirect: "/login/success",
    failureRedirect: "/login",
    failureFlash: true })
);



export default router;