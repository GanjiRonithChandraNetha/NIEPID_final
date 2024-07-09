// const loginModel=require('../model/login.model')
// const userModel=require('../model/user.model')
const userModel=require('../models/user.model')
const teacherModel=require('../models/teacher.model')
const studentModel=require('../models/student.model')
const studentDetailsModel=require('../models/studentDetails.model')
const classModel=require('../models/class.model')


const jwt=require('jsonwebtoken')


const viewEvaluation=async(req,res)=>{
    try{
        

    }
    catch(error){
        res.status(404).send(false)
    }
}

const viewDetails=async(req,res)=>{
    try {
        const std = await studentDetailsModel.findOne({'info.regNo':req.headers.regno})
        .catch((err)=>{
            console.log(err+" failed")
            res.status(501).json({message:"stdent not found"})
        })
        console.log(std)
        res.status(200).json(std)
      } catch (error) {
            console.log("failed\n"+error)
            res.status(500).json({message:"internal server error"});
      }
}



module.exports={
    viewDetails,
    viewEvaluation
}
