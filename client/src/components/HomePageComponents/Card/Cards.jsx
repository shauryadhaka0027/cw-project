import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Rate, Tag } from "antd";
import "./Cards.css";
import { useZustand } from "../../../Zustand/Zustand";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

export const Cards = ({ data,id }) => {
  const{isAuth}=useZustand();
  
 
  const navigate=useNavigate()

  const handleShade=()=>{
    
    if(!isAuth){
      Modal.confirm({
        title: "Please Login First",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk: () => {
          navigate("/signUp")
        }
    })
    }else{
      navigate(`/product/${id}`)
    }
};
const onProductData=()=>{
  if(isAuth){

    navigate(`/product/${id}`)
  }
}

  return (
    <>
      <div className="max-w-md " onClick={onProductData}>      
          <Card
          className="w-full sm:w-64 md:w-72 cursor-pointer"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          cover={
            <div className="max-w-full my-3">
              <img
                className="max-w-full h-52 object-cover mx-auto"
                src={data?.img || data?.image}
                alt={data?.title}
              />
            </div>
          }
        >
          <Meta
            className="text-center "
            title={data?.title || data?.shade}
            description={data?.desc}
          />
          <p className="text-center py-1 text-2xl">₹{data?.price}</p>
          <div className="text-center">
            <Tag className="bg-black text-white">Price</Tag>
          </div>
          <div className="text-center py-2">
            <Rate allowHalf defaultValue={3.5} />
          </div>
          <div className="flex justify-between ">
            <Button className="h-10 border-black border-2 flex items-center justify-center">
              <HeartOutlined key="heart" className="text-2xl" />
            </Button>
            <button onClick={handleShade} className="bg-black text-white h-10 w-32 md:w-40">
              Select Shade
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};
