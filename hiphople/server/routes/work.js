import express from "express";

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("워크룸");
});

export default router;