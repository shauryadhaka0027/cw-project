import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";

import { CiDiscount1 } from "react-icons/ci";
import { Button, Divider, notification, Tag } from "antd";
import { MdDelete } from "react-icons/md";
import Footers from "../../components/Footer/Footer";
import { useMutation } from "@tanstack/react-query";
import hrmsApi from "../../api/hrmsApi";

export const AddToCart = () => {
  const [productquantityCount, SetProductquantityCount] = useState(1);
  const [totalprice,setTotalPrice]=useState(0)
  const [producData, setproductData] = useState();
  const admin = JSON.parse(localStorage.getItem("auth-user"));
  const getCartItem = useMutation({
    mutationFn: hrmsApi.getCartItem,
  });
  const getItemdelete=useMutation({mutationFn:hrmsApi.getItemdelete})
  const placeOrder=useMutation({mutationFn:hrmsApi.deleteManyItems})

  const subractQuantityButton = () => {
    SetProductquantityCount((prev) => (prev === 1 ? prev : prev - 1));
  };
  const addQuantityButton = () => {
    SetProductquantityCount(productquantityCount + 1);
  };

  const deleteItem=(id)=>{
    console.log("idd",id)
    getItemdelete.mutate({_id:id,adminId:admin._id},{
      onSuccess:(data)=>{
        setproductData(data.data)
        const total = data.data.reduce((acc, ele) => {
          const price = parseFloat(ele.price);
          return acc + price;
        }, 0);
        setTotalPrice(total);
        notification.success({
          type:"success",
          message:data.Message
        })
      }
    })
    
  }

  const placeOrderButton=()=>{
    placeOrder.mutate({adminId:admin._id},{onSuccess:(data)=>{
      setproductData("")
      notification.success({
        type:"success",
        message:"Order is Placed"
      })
      setTotalPrice(0)
    }})
  }
  useEffect(() => {
    getCartItem.mutate(
      { adminId: admin._id },
      {
        onSuccess: (data) => {
          setproductData(data.data);
          const total = data.data.reduce((acc, ele) => {
            const price = parseFloat(ele.price);
            return acc + price;
          }, 0);
          setTotalPrice(total);
         
        },
      }
    );
    
  }, []);
  console.log('total',totalprice)
  return (
    <div>
      <Navbar />
      <div className="flex  pt-36 h-44 px-8 shadow-lg">
        <p className="px-4">Home </p>
        <p className="px-4">Bag</p>
      </div>
      <div className="full w-[95%] m-auto shadow-xl mt-5">
        <div className="first flex justify-center gap-5 py-4">
          <div className=" h-16 w-[46%] bg-[#dedede] rounded-xl ">
            <p className="pt-4 px-4 font-semibold ">BONOUS OFFER UNCLOCKED!</p>
          </div>
          <div className=" w-[46%] bg-[#ffdfdf] rounded-lg">
            <p className="pt-4 px-4  font-semibold">₹498 total savings</p>
          </div>
        </div>
        <div className="sec flex justify-center gap-5 py-4">
          <div className="w-[46%] rounded-xl ">
            <p className="px-2 font-semibold text-lg">BAG SUMMARY</p>
            <div className="product">
              {producData &&
                producData.map((ele, idx) => (
                  <>
                    <div
                      key={idx}
                      className="w-full my-2 rounded-lg border-2 flex justify-between"
                    >
                      <div className="flex items-center justify-center gap-2 ">
                        <img
                          className="w-20 rounded-lg  h-12 mx-4 flex  items-center"
                          src={ele?.image}
                          alt=""
                        />
                        <p className="text-center text-sm py-2 font-light">
                          {ele.desc}
                          <p>{ele?.shade}</p>
                          <p> ₹{ele?.price}</p> 
                        </p>
                      </div>
                      <div className="w-[25%] flex  items-center pt-2">
                        <p className="px-4 text-2xl text-[red] cursor-pointer" onClick={()=>deleteItem(ele?._id)}>
                          <MdDelete />
                        </p>
                        <p className="w-20 border-2 text-center flex items-center rounded-lg cursor-pointer">
                          <button
                            onClick={subractQuantityButton}
                            className="px-3 text-2xl"
                          >
                            -
                          </button>
                          {productquantityCount}
                          <button
                            onClick={addQuantityButton}
                            className="px-3 text-lg"
                          >
                            +
                          </button>
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
          <div className=" w-[46%] rounded-xl">
            <div className="border-2 rounded-xl">
              <p className="px-2 font-semibold text-lg">APPLY COUPON</p>
              <div className="py-2  ">
                <input
                  className="border-[black] h-10 w-[80%] px-2 "
                  type="text"
                  name=""
                  id=""
                  placeholder="ENTER GIFT CODE"
                />
                <button className="border-2 w-32 h-11 bg-black text-white">
                  Apply
                </button>
              </div>
              <div>
                <p className="px-2 text-[red] flex ">
                  <CiDiscount1 size={30} />
                  <span className="text-black px-2">Offers & Coupons</span>
                </p>
              </div>
            </div>
            <div className="my-4 pt-2 bg-black text-white rounded-lg">
              <p className="text-[#fbf369]">
                <Tag className="bg-white text-black mx-4 border-2 border-[#9da356]">
                  MEMBER
                </Tag>
                BENEFITS UNLOCKED
              </p>
              <p className="px-4 py-2">
                {" "}
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                SAVINGS (EXTRA 20% OFF)
              </p>
              <p className="px-4 pb-4 ">
                {" "}
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                FREE DELIVERY
              </p>
            </div>
            <div>
              <p className="font-bold text-lg py-4">PRICE DETAILS</p>
              <div className="flex justify-between border-2 rounded-lg py-2 ">
                <div className="px-4 w-[100%] py-2 ">
                  <p>Item(s) Total (Inclusive of taxes)</p>
                  <p>Savings</p>
                  <p>Club Vellvette Savings</p>
                  <p className="">Standard Shipping</p>
                  <Divider />
                  <p className="font-bold text-lg">ORDER TOTAL</p>
                </div>
                <div className="w-[10%]">
                  <p className="text-center">₹{totalprice}</p>
                  <p className="text-[green] text-center">-₹0</p>
                  <p className="text-[green] text-center">-₹269</p>
                  <p className="text-[green] text-center">Free</p>
                  <Divider />
                  <p className="font-bold text-lg">
                  ₹{totalprice ===0?0:totalprice - 269}
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-[90%] py-4">
                <Button className="w-72 h-11 text-white bg-black" onClick={placeOrderButton}>
                  PLACE ORDER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <Footers />
      </div>
    </div>
  );
};
