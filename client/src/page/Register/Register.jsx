import React, { useState } from "react";
import bg from "../../assets/bg.png";
import { Button, Divider, Form, Input } from "antd";
import "./register.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import hrmsApi from "../../api/hrmsApi";

const Register = () => {
  const [form] = Form.useForm();
  const navigate=useNavigate()
  const[issendOtp,setIsSendOtp]=useState(false)
  const userSignUp=useMutation({
    mutationFn:hrmsApi.userSignUp
  })
  const userSignIn=useMutation({
   mutationFn:hrmsApi.userSignIn
  })
  const onSubmitForm = (value) => {
    if(value.email){
      userSignUp.mutate(value,{onSuccess:(data)=>{
       
        setIsSendOtp(true)
        form.resetFields()
      }})
    }else{
    userSignIn.mutate(value,{onSuccess:(data)=>{
      navigate("/home")
      localStorage.setItem("auth-user", JSON.stringify(data.data));
    }})
    }
  };

  const handleBackButon=()=>{
    navigate("/")
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="h-64 lg:h-full lg:w-1/3">
        <img
          className="lg:h-[43rem]  h-full w-full object-cover"
          src="https://media.sugarcosmetics.com/upload/authSIe2.jpg"
          alt="Background"
        />
      </div>
      <div
        className="h-full bg-cover bg-center w-full lg:w-2/3 p-4 sm:p-8 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <p className=" cursor-pointer " onClick={handleBackButon}><IoIosArrowRoundBack size={25} /></p>
        <p className="text-4xl sm:text-6xl lg:text-9xl text-center my-4 sm:my-6 lg:my-8  text-[#d4d4d4] font-bold">
          Hi!
        </p>
        <p className="text-center font-semibold text-md sm:text-lg">
          Login/Sign Up Using Email
        </p>
        <Form
          form={form}
          onFinish={onSubmitForm}
          layout="vertical"
          className="w-full sm:w-[80%] lg:w-[60%] mx-auto mt-2 sm:mt-6 lg:mt-4"
        >
          {issendOtp ?(<>
            <Form.Item className="text-left px-4 sm:px-8 lg:px-16" label="otp" name="otp">
            <Input
              className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your Otp"
            />
          </Form.Item>
          </>):(<>
            <Form.Item className="text-left px-4 sm:px-8 lg:px-16" label="Email" name="email">
            <Input
              className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your Email"
            />
          </Form.Item>
          </>)}
          
          <p className="text-[#989797] mb-4 sm:mb-6 lg:mb-8 text-center text-sm sm:text-md">
            Registering for this site allows you to access your order status
            and history. Just fill in the above fields, and we'll get a new
            account set up for you in no time. We will only ask you for
            information necessary to make the purchase process faster and
            easier.
          </p>
          <Form.Item className="flex justify-center">
            <Button
              htmlType="submit"
              className="btn w-full sm:w-[20rem] text-[#989797] hover:bg-black cursor-pointer"
            >
              Send Me OTP
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <p className="text-center text-[#a3a3a3] text-sm">
          Get important updates on Whatsapp <span className="text-red-600">Terms and Conditions</span>
        </p>
        <p className="flex justify-end max-w-[97%] py-2 text-sm">
          Need Help? <span className="text-red-600">Contact Us</span>
        </p>
        <Divider />
        <p className="text-center text-xs font-light -mt-1 mb-1">
          By Signing up or logging in, you agree to our Terms and Conditions
        </p>
        <p className="font-normal text-sm bg-black text-[#c6c2c2] px-4 py-1 rounded-md">
          Copyright © 2024 SUGAR Cosmetics. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
