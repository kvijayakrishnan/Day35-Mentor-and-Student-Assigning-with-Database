const express = require("express");
const router = express.Router();
const Students = require("../model/students.model");



router.post("/students/create", async(req, res) =>{
  try{
    const student = await new Students(req.body);
    // console.log(req.body)
   await student.save()
   res.status(200).send({message:"New student is added Successfully"})
  }catch(err){
    res.status(500).send({message: "Internal server error"})
  }
});


router.get("/students", async (req, res) => {
    try {
      // console.log(req.body) 
      let students = await Students.find(req.body);
      // console.log(students)
       res.status(201).send(students)
    } catch (error) {
      // console.log(error)
      res.status(500).send({message: "Internal Server Error"});

    }
  });



router.put("/students/:studentID", async (req, res) => {
  try{
    // console.log(req.params.studentID)
     const studentID = req.params.studentID;
   let student = await Students.findByIdAndUpdate({_id:studentID},{$set:req.body});
   res.status(200).send(student)
  }catch(err){
    res.status.apply(500).send({message:"Internal server error"})
  }
})


router.delete("/students/:studentID", async(req, res) => {
  try{
    const studentID = req.params.studentID;
    let student = await Students.findByIdAndDelete({_id:studentID})
    res.status(200).send({message:"student is deleted successfully"})

  }catch(err){
    res.status.apply(500).send({message:"internal server error"})
  }
})






















  module.exports = router;
