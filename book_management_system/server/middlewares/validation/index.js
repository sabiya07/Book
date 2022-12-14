import {body,validationResult} from 'express-validator'
function userRegisterValidationRules(){
    return[
body("firstname", "First Name is Required").notEmpty().isLength({ min: 2 }),
        body("lastname", "Last Name is Required / Min 2 Characters").notEmpty().isLength({ min: 2 }),
        body("email", "Email is Required").isEmail(),
        body("password", "Password should be Min 8 Characters, Atleast 1 Uppercase, 1 Lowercase, 1 Number, 1 Special Character")
            .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }),
        body("password2").custom(
            (value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("Password & Confirm Password do not match");
                } else {
                    return true;
                }
            }
        )
    ]
    }
    function userLoginValidatorRules() {
        return [
            body("password", "Password is Required").notEmpty(),
            body("email", "Email is Required").isEmail()

         ]}

         function addbookvalidations(){
            return [
                body("title","title is required").isString({min:2}),
                body("author","author is required").isString({min:2}),
                body("coverimageURL","image URL is required").isURL({min:2}),
                body("publisher","publisher is required").isString({min:2}),
                body("synopsis","synopsis is required").isString({min:2}),
                body("pagecount","pagecount is required").notEmpty({min:2}),
                
            ]
         }
function errorMiddleware(req,res,next){
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    return next();
}
export {
    userRegisterValidationRules,errorMiddleware,userLoginValidatorRules,addbookvalidations
}







