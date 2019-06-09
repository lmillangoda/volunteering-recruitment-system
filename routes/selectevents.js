const express = require("express");
const router = express.Router();
const selectevents = require("../models/selectevent");
const users = require("../models/user");
const jwt = require("jsonwebtoken");


router.get('/geteventvolunteers/:id',(req,res)=>{
  console.log(req.params.id)
  const query = {eventid: req.params.id}
  console.log(query)
  selectevents.find(query)
  .then(selectevents =>{
     res.json(selectevents);
    //console.log(res);
  }
     );
});

router.get('/getvolunteer/:id',(req,res) => {
  const query = {_id: req.params.id}
  users.find(query).then(users =>{
    res.json(users);
  })
})

router.put("/confirmparticipation/:id",(req,res)=>{
   let updatedevent = ({
    eventid:req.body.eventid,
    userid:req.body.userid,
    title:req.body.title,
    description:req.body.description,
    date:req.body.date,
    attendees:req.body.attendees,
    rating:req.body.rating,
    organization:req.body.organization,
    status:req.body.status,
    participation:true
   });
   console.log(req.params.id,"wqwqwqwq");
   selectevents.findOneAndUpdate(req.params.id,{$set:updatedevent},{new:true},(err,doc) => {
    if(!err) { res.send(doc); }
    else { console.log('Error confirming participation : ' +JSON.stringify(err,undefined,2)); }
   });
});


module.exports = router;
   
