import local from "./localStrategy.js";

const passportConfig=(passport)=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        //id는 req.session.passport.user 에 저장된 값
        done(null, id);
    });

    local(passport);
};

export default passportConfig;