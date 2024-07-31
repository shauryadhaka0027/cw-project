import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Button, Rate, Tag, Collapse, notification } from "antd";
import { HeartOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { Cards } from "../../components/HomePageComponents/Card/Cards";
import Footers from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import hrmsApi from "../../api/hrmsApi";
import Scroll from "../../components/Scroll/Scroll";

const { Panel } = Collapse;
const slidearr2 = [
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSUGAR-Signature-Makeup-Kit.jpg%3Fv%3D1719901641&w=256&q=75",
      price: "555",
      title: "Mousse Muse Lip cream",
      desc: "12 shade",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FPrime-Pout-Minimal-Set.jpg%3Fv%3D1719895945&w=256&q=75",
      price: "749",
      title: "Matte-Attack TransferProof Lipstick",
      desc: "14 shade",
    },
    {
      img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FFestive-Makeup-Kit_6f8a978b-8e31-45be-bb24-0ef3700439ef.jpg%3Fv%3D1720798832&w=256&q=75",
      price: "999",
      title: "Matte as Hell Crayon Lipstick",
      desc: "2 shade",
    },
    
  ];

const items = [
  {
    key: '1',
    label: 'Description',
    children:<div>
        <h3>DESCRIPITION</h3>
        <h4>Bestselling Matte Lip Crayon in Mini Size</h4>
        <p>Get ready for lip matte-gic! Your beloved and our bestseller, Matte As Hell Crayon Lipstick is here in a mini size. The super-pigmented, creamy and smooth formula slides onto your lips like a breeze, leaving you with that matte finish you've always dreamt about. Not just this, experience one swipe intense colour payoff that stays and slays  from dusk to dawn.</p>
        <p>Available in 6 enticing shades, this smudge- and transfer-proof beauty is available in flattering shades - try subtle nudes or bold, dramatic hues. Thoughtfully curated to complement all Indian skin tones, this matte lip crayon is a must-have for on-the-go pout perfection.</p>
        <h4>Why you'll love it:</h4>
        <ul>
            <li>Matte As Hell Crayon Lipstick is now available in a mini size</li>
            <li>This intense matte lip crayon is 100% transfer-proof and smudge-proof</li>
            <li>Super-pigmented and creamy texture, the non-drying formula is comfortable to wear and glides on smooth on your lip</li>
            <li>This long-wear, one-swipe formula keeps the colour intact throughout the day </li>
            <li>100% vegetarian, cruelty and paraben free</li>
        </ul>
    </div>,
  },
  {
    key: '2',
    label: 'INGREDIENTS',
    children: <div>
        <p>
        Matte As Hell Crayon Mini Lipstick: Dimethicone, Diisostearyl Malate, Synthetic Wax, Distarch Phosphate, Polybutene, Dimethicone/Vinyl Dimethicone Crosspolymer, Caprylyl Methicone, Dimethylimidazolidinone Rice Starch, Glyceryl Caprylate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Silica, Isoceteth - 10.
        May Contain: CI 45410, 15850, 19140.
        </p>
    </div>,
  },
  {
    key: '3',
    label: 'HOW TO USE',
    children:<div>
        <ul>
            <li>Apply the lip crayon in the center of your upper lip and follow the contours of your mouth</li>
            <li>Glide the crayon across the entire bottom lip</li>
        </ul>
    </div>,
  },
  {
    key: '4',
    label: 'ADDITIONAL DETAILS',
    children:<div>
        <ul>
            <li>Apply the lip crayon in the center of your upper lip and follow the contours of your mouth</li>
            <li>Glide the crayon across the entire bottom lip</li>
        </ul>
    </div>,
  },
  {
    key: '5',
    label: 'REVIEWS',
    children:<div>
        <ul>
            <li>Apply the lip crayon in the center of your upper lip and follow the contours of your mouth</li>
            <li>Glide the crayon across the entire bottom lip</li>
        </ul>
    </div>,
  },
];

export const ProductPage = () => {
  const {id}=useParams()
  const admin=JSON.parse(localStorage.getItem("auth-user"))
  const[onProductData,setOnProductData]=useState()
  const getProductdata=useMutation({
  mutationFn:hrmsApi.getSingleProduct
})
const addItemToCart=useMutation({
  mutationFn:hrmsApi.addItemToCart
})


 console.log("productsss",onProductData)
const addTocart=()=>{
  addItemToCart.mutate({adminId:admin._id,...onProductData,productId:onProductData._id},{onSuccess:(data)=>{
    notification.success({
      type:"success",
      message:data.Message
    })
  },
  onError:(data)=>{
    notification.error({
      type:'error',
      message:data.response.data.Message
    })
  }
})
}


  useEffect(()=>{
   getProductdata.mutate({_id:id},{onSuccess:(data)=>{
     const arr=data.data[0]
    setOnProductData(arr)
   }})
  },[])
  console.log("prod",onProductData)
  return (
    <div>
      <Scroll/>
      <Navbar />
      <div className="text-black pt-36 flex shadow-xl pb-4">
        <p className="px-4 flex">Home</p>
        <p className="px-4 font-semibold">{onProductData?.desc}</p>
      </div>
      <div className="w-[90%] m-auto  mt-8 flex justify-center gap-10">
        <div className=" w-[40%] flex justify-center gap-10 bg-fixed h-[60%]  py-16">
          <div className="w[30%] border-2   flex flex-col gap-5 h-[60%]  bg-fixed">
            <img
              className="w-24 h-24 border-2"
              src="https://cdn.shopify.com/s/files/1/0906/2558/files/Matte-as-Hell-Crayon-Mini-Lipstick-01-Scarlett-OHara-5.jpg?v=1719874868"
              alt=""
            />
            <img
              className="w-24 h-24 border-2"
              src="https://cdn.shopify.com/s/files/1/0906/2558/files/Matte-as-Hell-Crayon-Mini-Lipstick-01-Scarlett-OHara-4.jpg?v=1719874864"
              alt=""
            />
            <img
              className="w-24 h-24 border-2"
              src="https://cdn.shopify.com/s/files/1/0906/2558/files/Matte-as-Hell-Crayon-Mini-Lipstick-01-Scarlett-OHara-3.jpg?v=1719874860"
              alt=""
            />
          </div>
          <div className="border-2 w-[70%] flex flex-col items-center h-[60%]">
            <img
              src={onProductData?.image}
              alt=""
            />
          </div>
        </div>
        <div className=" w-[60%] py-2">
          <p className="py-6 text-2xl">
            {onProductData?.desc}
          </p>
          <span className="border-2 rounded-2xl">
            <Rate allowHalf defaultValue={1} count={1} />
            4.8 (290)
          </span>
          <p className="py-4 text-2xl">
          <Tag className="px-2 rounded-xl bg-[black] text-[#fff] w-20">
              <CheckCircleTwoTone twoToneColor="#52c41a" className="mr-1" />
              Price
            </Tag>
            ₹{onProductData?.price}
            <span className="text-[#f84747] px-2 text-sm">
              (Save 40%)
              <Tag className="mx-4 bg-[#2dd92d] text-[#fff]">
                Free Shipping
              </Tag>
            </span>
          </p>
          <p>Non Member Price: ₹449 MRP ₹599</p>
          <div className="flex gap-5 py-2">
            <div style={{ display: 'flex', gap: '5px' }}>
              <div className="flex gap-10 py-2">
                <div style={{ backgroundColor: '#ca477c', width: '30px', height: '30px', borderRadius: '4px' }}></div>
                <div style={{ backgroundColor: '#d877fc', width: '30px', height: '30px', borderRadius: '4px' }}></div>
                <div style={{ backgroundColor: '#ca4790', width: '30px', height: '30px', borderRadius: '4px' }}></div>
                <div style={{ backgroundColor: '#c5adc9', width: '30px', height: '30px', borderRadius: '4px' }}></div>
                <div style={{ backgroundColor: '#da9ebc', width: '30px', height: '30px', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
          <div className="flex gap-8 py-4">
            <Button className="h-10 border-black flex items-center justify-center">
              <HeartOutlined key="heart" className="text-2xl" />
            </Button>
            <button className="bg-black text-white h-10 w-60" onClick={addTocart}>
              ADD To Bag
            </button>
          </div>
          <div className="flex gap-10">
            <input className="border-2 h-10 w-52 rounded-lg px-4" placeholder="Check Address" type="text" />
            <Button className="h-10 w-20 bg-black text-white">Check</Button>
          </div>
          <div className="flex gap-10 py-4 mt-4 border-2 bg-[#ddd]">
            <p>Currently</p>
            <p>Easy Return</p>
            <p>Quality First</p>
          </div>
          <div className="bg-[#fff] ">
            <Collapse className="bg-[#fff]" >
              {items.map(item => (
                <Panel size={"large"} header={item.label} key={item.key}>
                  {item.children}
                </Panel>
              ))}
            </Collapse>
          </div>
        </div>
      </div>
      <div className="border-2 rounded-lg my-4">
      <div className="flex items-center justify-center my-10 ">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-lg">FREQUENTLY BOUGHT TOGETHER</span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
    
      <div className="flex  justify-center gap-20 py-10">
    
        {slidearr2.map((ele,idx)=>(
            <div key={idx} >
                <Cards data={ele}  />
            </div>
        ))}
      </div>
      </div>
      <Footers/>
    </div>
  );
};
