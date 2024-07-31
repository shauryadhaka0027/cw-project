import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  MailOutlined,
  PinterestOutlined
} from "@ant-design/icons";
import { Divider } from "antd";

const Footers = () => {
  const iconArr = [
    <FacebookOutlined />,
    <TwitterOutlined />,
    <YoutubeOutlined />,
    <InstagramOutlined />,
    <MailOutlined />,
    <PinterestOutlined />
  ];
  const helpDeskArr = [
    "Stores",
    "Elite",
    "Terms & Conditions",
    "Returns",
    "FAQs",
    "About Us"
  ];
  return (
    <>
      <div className="w-full px-4 sm:px-8">
        <p className="text-base font-bold">
          READ MORE ABOUT SUGAR COSMETICS
        </p>
        <div className="flex items-center justify-center my-4">
          <hr className="border-0 border-t-2 border-pink-500 mx-2 w-10" />
          <span className="font-semibold text-3xl text-center">LET’S STAY IN TOUCH</span>
          <hr className="border-0 border-t-2 border-pink-500 mx-2 w-10" />
        </div>
        <p className="text-center font-semibold text-[#909090]">
          Get the latest beauty tips straight to your inbox. Can’t wait to connect!
        </p>

        <div className="border-2 m-auto max-w-3xl rounded-xl flex flex-col sm:flex-row my-8 mb-28">
          <input
            className="w-full h-10 px-6 mb-4 sm:mb-0 sm:mr-4"
            type="text"
            placeholder="Enter the Email"
          />
          <button className="w-full sm:w-36 rounded-md bg-black text-white h-10">
            Submit
          </button>
        </div>
      </div>
      <div className="bg-black w-full px-4 sm:px-8">
        <div className="w-full flex justify-center">
          <img
            className="-mt-16 rounded-full"
            src="https://yt3.googleusercontent.com/N_2MYQKH-6vIyFTjVZojJ0egDHdQQEL7zvB3k3qhPKTxtjM97gKDd9wwdqmMnqPiKK7Nmffg=s160-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-white border-b-2 w-[90%] m-auto pb-8">
          {iconArr.map((ele, idx) => (
            <div key={idx} className="text-2xl cursor-pointer hover:text-[#b5b4b4]">
              {ele}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-white border-b-2 w-[90%] m-auto my-8 pb-8">
          {helpDeskArr.map((ele, idx) => (
            <div key={idx} className="text-lg cursor-pointer hover:text-[#b5b4b4]">
              {ele}
            </div>
          ))}
        </div>
        <div className="border-b-2 w-[90%] m-auto my-8 pb-8">
          <p className="text-white text-lg">GET IN TOUCH</p>
          <div className="flex flex-wrap justify-around text-white my-12">
            <div className="text-center sm:text-left">
              <p className="py-4">Call us at</p>
              <p>1800-209-9933</p>
              <p className="text-[#999898]">Monday to Friday: 09:00 AM - 09:00 PM</p>
              <p className="text-[#999898]">Saturday: 09:00 AM - 07:00 PM</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="py-4">Support</p>
              <p className="text-[#999898]">hello@sugarcosmetics.com</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="py-4">Careers</p>
              <p className="text-[#999898]">We're hiring!</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="py-4">Press & Media</p>
              <p className="text-[#999898]">pr@sugarcosmetics.com</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="py-4">Influencer Collab</p>
              <p className="text-[#999898]">Join Us</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-white text-center sm:text-left">
          <div>
            <p className="text-lg">GET THE NEW SUGAR APP TODAY!</p>
            <p className="text-[#999898]">Tap into a better shopping experience.</p>
          </div>
          <div className="flex gap-4">
            <img className="w-24 h-auto" src="https://in.sugarcosmetics.com/playstore.png" alt="" />
            <img className="w-24 h-auto" src="https://in.sugarcosmetics.com/apple-store.png" alt="" />
          </div>
        </div>
        <Divider className="border-[#fff]"/>
        <p className="text-white text-center">copyright © 2024 SUGAR Cosmetics. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footers;
