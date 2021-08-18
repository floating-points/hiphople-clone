import passportLocal from "passport-local";
import userList from "./userList.js";

const LocalStrategy=passportLocal.Strategy;

const passportConfig=(passport)=>{
    passport.use(
        new LocalStrategy(
            (username, password, done)=>{
                const result=userList.filter((user)=>user.username===username);

                if(result.length>0){
                    const user=result[0];
                    if(user.password===password){
                        return done(null, user);
                    }
                    else{
                        return done(null, false, {message:"틀린 비밀번호입니다"});
                    }
                }
                else{
                    return done(null, false, {message:"존재하지 않는 유저입니다"});
                }
            }
        )
    );

    passport.serializeUser((user, done)=>{
        done(null, user.username);
    });

    passport.deserializeUser((username, done)=>{
        //id는 req.session.passport.user 에 저장된 값
        done(null, username);
    });
};

export default passportConfig;