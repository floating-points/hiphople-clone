import express from "express";

const router=express.Router();

router.get("/", (req, res)=>{
    res.send("앨범 게시판");
})

export default router;