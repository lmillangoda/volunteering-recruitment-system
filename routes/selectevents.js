const express = require("express");
const router = express.Router();
const selectevents = require("../models/selecevents");
const users = require("../models/user");
const jwt = require("jsonwebtoken");
var eventvols = [];

router.get('/getvolunteers',(req,res,next)=>{
    const _id = req.body._id;});

    selectevents.getSelectEventById(email, (err, organization) => {
});