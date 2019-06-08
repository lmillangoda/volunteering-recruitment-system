const express = require("express");
const router = express.Router();
const selectevents = require("../models/selectevent");
const users = require("../models/user");
const jwt = require("jsonwebtoken");
var eventvols = [];

router.get('/geteventvolunteers',(req,res,next)=>{
    const _id = req.params.id;
    selectevents.getSelectEventByEventID(_id, (err, ) => {
        if (err) throw err;
        if (!selectevents) {
          return res.json({ success: false, msg: "selectevents not found" });
        } else
        res.json({ success: true });
        console.log(res,
          "selectevents are found..................................................."
        );
    });
});

module.exports = router;
   