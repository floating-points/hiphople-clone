import express from "express";
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
import passportConfig from "./passport/index.js";
import path from "path";
import dotenv from "dotenv";

const router=express.Router();
const LocalStrategy=passportLocal.Strategy;
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

router.use("/", express.static(__dirname+"/server/loginView"));
router.use("/success", express.static(__dirname+"/server/loginView/success.html"));


passportConfig(passport);

router.post("/", (req, res, next)=>{
    passport.authenticate("local", (authError, user, info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.json(info);
        }
        return req.login(user, loginError=>{
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
        });
    })(req,res,next);
    res.redirect("/login/success");
});



export default router;