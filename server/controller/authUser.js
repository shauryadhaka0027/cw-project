import AuthUser from "../model/authuser.js"
import mailsender from "../utils/sendingEmail.js";
import jwt from "jsonwebtoken";

export const userSignUp = async (req, res) => {
    try {
        const { email } = req.body;
        const checkEmail = await AuthUser.findOne({ email });
        
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        console.log("otp", randomNumber);
        
        let emailtext = {
            toMail: email,
            subject: "OTP LOGIN",
            fromMail: "skdj@gmail.com",
            html: `
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>OTP Verification</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            padding: 20px;
                            background-color: #fff;
                            border-radius: 5px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h2 {
                            color: #333;
                        }
                        p {
                            color: #555;
                            line-height: 1.6;
                        }
                        .otp {
                            font-size: 24px;
                            font-weight: bold;
                            color: #4caf50;
                            margin: 20px 0;
                        }
                        .btn-verify {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #4caf50;
                            color: white;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 20px;
                        }
                        .btn-verify:hover {
                            background-color: #45a049;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>OTP Verification</h2>
                        <p>To complete your login, please use the following One-Time Password (OTP):</p>
                        <div class="otp">${randomNumber}</div>
                        <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
                        <p>If you did not request this OTP, please ignore this email.</p>
                        <p>Best regards,<br />Your Company Name</p>
                    </div>
                </body>
                </html>
            `,
        };

        if (checkEmail) {
            await AuthUser.findByIdAndUpdate(checkEmail._id, { otp: randomNumber });
            mailsender(emailtext);
            return res.status(200).json({ Message: "OTP sent to existing user" });
        } else {
            const newUser = new AuthUser({ otp: randomNumber, ...req.body });
            await newUser.save();
            mailsender(emailtext);
            return res.status(200).json({ Message: "User is created and OTP sent", data: newUser });
        }
    } catch (error) {
        console.log("error in user signup controller:", error);
        res.status(500).json({ Message: error.message });
    }
};


export const userSignIn=async(req,res)=>{
  try {
    const {otp,email}=req.body
    const findUserEmail=await AuthUser.findOne(email)
    if(!findUserEmail){
        return res.status(400).json({Message:"Email is not Correct"})
    }
    if(findUserEmail){
        const checkOtp=await AuthUser.findOne(req.body)
        if(!checkOtp){
            return res.status(400).json({Message:"OTP is incorrect"})
        }
        await AuthUser.findByIdAndUpdate(checkOtp._id,{otp:""})
        res.status(200).json({Message:"OTP Is verified Succesfully",data:checkOtp})
    }
  } catch (error) {
    
  }
}