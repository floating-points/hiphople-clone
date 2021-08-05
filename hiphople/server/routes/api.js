import express from "express";
import domestic from "./domestic.js";
import global from "./global.js";
import fashion from "./fashion.js";
import work from "./work.js";
import mix from "./mix.js";
import album from "./album.js";
import board from "./board.js"

const router=express.Router();

router.use("/:board", (req,res)=>{
    res.send(req.params.board);
});
/*
router.use("/domestic", domestic);
router.use("/global", global);
router.use("/fashion", fashion);
router.use("/work", work);
router.use("/mix", mix);
router.use("/album", album);*/

export default router;