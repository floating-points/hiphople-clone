import passportLocal from "passport-local";

const localStrategy=passportLocal.Strategy;

const local=(passport)=>{
    passport.use(
        new localStrategy(
            {
                usernameField:"id",
                passwordField:"pw"
            },
            (id, pw, done)=>{
                const user={
                    id:"test",
                    pw:"testpw"
                };

                if(id===user.id && pw===user.pw){
                    done(null, user);
                }
            }
        )
    );
};

export default local;