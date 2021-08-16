import passportLocal from "passport-local";
import userList from "./userList.js";

const LocalStrategy=passportLocal.Strategy;

const local=(passport)=>{
    passport.use(
        new LocalStrategy(
            {
                usernameField:"id",
                passwordField:"pw"
            },
            (id, pw, done)=>{
                const result=userList.filter((user)=>user.id===id);

                if(result.length>0){
                    const user=result[0];
                    if(pw===user.pw){
                        done(null, user);
                    }
                    else{
                        done(null, false, {message:"틀린 비밀번호"});
                    }
                }
                else{
                    done(null, false, {message:"존재하지 않는 회원"});
                }
            }
        )
    );
};

export default local;