
const express = require("express");
const router = express.Router();
const mongoose =require("mongoose");
const Mentors = require("../model/mentors.model");
const { route } = require("./mentors.routes");

router.get("/mentors", async (req, res) => {
    try {
        let mentors = await Mentors.find((req.body));
        res.status(200).send(mentors)
    } catch (error) {
      res.status(500).send({message: "Internal Server Error"});
    }
  });


router.post("/mentors/create", async(req, res) =>{
  try{
    // console.log(req.body)
    const mentor = await new Mentors(req.body);
    // console.log(mentor)
   await mentor.save()
     res.status(200).send({message:"New mentors is added Successfully"})
  }catch(err){
    res.status(500).send({message: "Internal server Error"})
  }
});


router.put("/mentors/:mentorID", async (req,res) =>{
  try{
    let mentorID = req.params.mentorID;
    console.log(mentorID, req.body)
    let mentor = await Mentors.findByIdAndUpdate({_id:new mongoose.Types.ObjectId(mentorID)},{...req.body})
    // console.log(mentor)
    res.status(200).send(mentor)


  }catch{err}{
    res.status(500).send({message:"Internal server error"})
  }
})


router.delete("/mentors/:mentorID", async(req,res) => {
  try{
    const mentorID = req.params.mentorID
    let mentee = await Mentors.findByIdAndDelete({_id:mentorID})
    res.status(200).send({message:"Mentor is Deleted Successfully"})

  }catch(err){
    res.status.apply(500).end({message:"Internal server error"})
  }
})




















  module.exports = router;