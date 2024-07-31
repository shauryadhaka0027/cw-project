import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import Tab from "../Tab/Tab";
import { useNavigate } from "react-router-dom";
import { useZustand } from "../../Zustand/Zustand";
import { Dropdown, Menu, notification, Space } from "antd";
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth,setIsAuth } = useZustand();
  

  const handleLogin = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
  
    localStorage.clear();
    setIsAuth(false)
    navigate("/");
    notification.success({
      type:"success",
      message:"succesfully Logout"
    })
  };

  const handleClick = () => {
    if (isAuth) {
      
      navigate("/home");
    }
  };

  const items=[{
    key: '4',
    
    label:(<>
    <button onClick={handleLogout}>Logout</button>
    </>),
  },]

  return (
    <>
      <div className="w-full fixed z-30">
        <div className="flex justify-around bg-[black] h-16">
          <div
            className="flex items-center max-w-md cursor-pointer"
            onClick={handleClick}
          >
            <img
              className="h-10"
              src="https://d32baadbbpueqt.cloudfront.net/Logo/9d3f78c0-b37e-443f-8418-5740b7ccd36c.gif"
              alt=""
            />
          </div>
          <div className="flex items-center w-[45%]">
            <input
              type="text"
              className="w-[90%] h-9 bg-[black] border-2 rounded-md"
              placeholder='Try "Liquid Lipstick"'
            />
            <button className="bg-[#fff] h-9 w-[17%] rounded-md flex items-center -mx-2">
              <span className="mx-2">
                <IoSearch size={20} />
              </span>
              Search
            </button>
          </div>
          <div className="w-[22%] flex items-center justify-between">
            {isAuth ? (
              <Dropdown
              className="text-white"
                menu={
                  {items}
                }
              >
                <a className=" cursor-pointer " onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hi, Sugar Fan
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            ) : (
              <div
                className="text-[#fff] flex items-center cursor-pointer"
                onClick={handleLogin}
              >
                <IoPersonCircleOutline size={25} />
                <span>Login/Register</span>
              </div>
            )}
            <div className="text-[#fff] flex">
              <FaRegHeart size={20} />
              <span className="px-4 cursor-pointer" onClick={()=>{isAuth(navigate("/addToCart"))}}>
                <IoBagRemoveOutline size={20} />
              </span>
              <span className="px-2">
                <BiSolidOffer size={20} />
              </span>
            </div>
          </div>
        </div>
        <Tab />
      </div>
    </>
  );
};

export default Navbar;
