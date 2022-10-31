import express from "express";
import bcrypt from "bcrypt";
import config from "config";


//IMPORT Models
import randomString from "../../utils/randomString.js";
import users from "../../models/users/index.js";
import { userRegisterValidationRules,errorMiddleware,userLoginValidatorRules,addbookvalidations } from "../../middlewares/validation/index.js";
import book from "../../models/book/index.js";
const router = express.Router();



/*
End Point : /api/user/register
Method POST
Access : Public
Validation : 
        Password must be 8 characters minimum length, 1 uppercase, 1 special character,1 lowercase is mandatory
        Email address is unique and required field
        Firstname length not more than 25 characters
        password & password2 should match, but save password field only.
 Description: User Signup

*/

router.post("/register", 
userRegisterValidationRules(),userLoginValidatorRules(), errorMiddleware, async (req, res) => {

    try {
        let { firstname, lastname, email, password } = req.body;
        // console.log(req.body);
        //Avoid Double Registration
        let userData = await users.findOne({ email });
        if (userData) {
            res.status(409).json({ "error": "Email Already Registered" })
        }
        password = await bcrypt.hash(password, 12);
        const user = new users(req.body);
        user.userverifytoken = randomString(15);
        await user.save();
        res.status(200).json({ "success": "Register is UP" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }
})

router.post("/book",addbookvalidations(),errorMiddleware,async(req,res)=>{
    try {
        let book=new book(req.body);
        await book.save();
        res.status(200).json({success:"book successfully added"});

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }
})

router.get("/book",async(req,res)=>{
    try {
        let book=new book.findone({});
        res.status(200).json({success:"book found"});

    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }

})

export default router;