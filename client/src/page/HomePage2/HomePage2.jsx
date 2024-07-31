import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import SideMenu from "../../components/SideMenu/SideMenu";
import {
  MdManageAccounts,
  MdOutlineSupervisorAccount,
  MdOutlineEditNote,
} from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import hrmsApi from "../../api/hrmsApi";
import { Cards } from "../../components/HomePageComponents/Card/Cards";
import Footers from "../../components/Footer/Footer";
import { Checkbox, ColorPicker, notification } from "antd";


const SideMenuArr1 = [
  {
    key: "Sort",
    label: "SortBy : Popularity Bestseller",
    icon: <MdManageAccounts />,
    children: [
      { key: "descending", label: "Price: High To Low" },
      { key: "ascending", label: "Price: Low To High" },
      { key: "custumer Top Rated", label: " Customers Top Rated" },
      { key: "Best seller", label: "Bestsellers" },
    ],
  },
];

export const HomePage2 = () => {
  const [productData,setProductData]=useState()
  const getProductSort=useMutation({mutationFn:hrmsApi.productSort})
  const getproducts=useMutation({
    mutationFn:hrmsApi.getproduct
  })
  const onChangeFilter=(e)=>{
    console.log("filter ",e)
  }
  const OnChangeFilterSort=(key,keyPath)=>{
    if(key==="descending"){
      getProductSort.mutate({typesort:"descending"},{onSuccess:(data)=>{
        setProductData(data.data)
        notification.success({
          type:"success",
          message:"Filter is apply"
        })
      }})
    }else if(key=="ascending"){
      getProductSort.mutate({typesort:"ascending"},{onSuccess:(data)=>{
        setProductData(data.data)
        notification.success({
          type:"success",
          message:"Filter is apply"
        })
      }})
    }
  }
  const sideMenuArr=[
    {
      key: "Filter",
      label: "Filter",
      // icon: <MdManageAccounts />,
     
    },
    {
      key: "Category",
      label: "Category",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Lipstick", label: <Checkbox onChange={onChangeFilter}>Lipstick</Checkbox>
         },
        { key: "Nail Lacquer", label: <Checkbox onChange={onChangeFilter}>Nail Lacquer</Checkbox> },
        { key: "Foundation", label: <Checkbox onChange={onChangeFilter}>Foundation</Checkbox> },
        { key: "Compact", label: <Checkbox onChange={onChangeFilter}>Compact</Checkbox>},
      ],
    },
    {
      key: "Price",
      label: "Price",
      // icon: <MdManageAccounts />,
      children: [
        { key: "0-299", label: <Checkbox onChange={onChangeFilter}>₹0 - ₹299</Checkbox>
         },
        { key: "300-499", label: <Checkbox onChange={onChangeFilter}>₹300 - ₹499</Checkbox> },
        { key: "500-899", label: <Checkbox onChange={onChangeFilter}>₹500 - ₹899</Checkbox> },
        { key: "900", label: <Checkbox onChange={onChangeFilter}>₹900+ </Checkbox>},
      ],
    },
    {
      key: "Discount",
      label: "Discount",
      // icon: <MdManageAccounts />,
      children: [
        { key: "10%", label: <Checkbox onChange={onChangeFilter}>10% and Above</Checkbox>
         },
        { key: "20%", label: <Checkbox onChange={onChangeFilter}>20% and Above</Checkbox> },
        { key: "30%", label: <Checkbox onChange={onChangeFilter}>30% and Above</Checkbox> },
        { key: "40%", label: <Checkbox onChange={onChangeFilter}>40% and Above</Checkbox>},
      ],
    },
    {
      key: "Color",
      label: "Color",
      // icon: <MdManageAccounts />,
      children: [
        { key: "red", label: <Checkbox onChange={onChangeFilter}><ColorPicker format="hex" size="small" defaultValue="#ff1648" />red</Checkbox>
         },
        { key: "black", label: <Checkbox onChange={onChangeFilter}><ColorPicker format="hex" size="small" defaultValue="#0e0e0e" />black</Checkbox> },
        
      ],
    },
   
    {
      key: "Finish",
      label: "Finish",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Matte", label: <Checkbox onChange={onChangeFilter}>Matte</Checkbox>
         },
        { key: "Crème", label: <Checkbox onChange={onChangeFilter}>Crème</Checkbox> },
        { key: "Natural11", label: <Checkbox onChange={onChangeFilter}>Natural</Checkbox> },
        { key: "Shimmer%", label: <Checkbox onChange={onChangeFilter}>Shimmer</Checkbox>},
      ],
    },
    {
      key: "Skin Tone",
      label: "Skin Tone",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Deep", label: <Checkbox onChange={onChangeFilter}>Deep</Checkbox>
         },
        { key: "Light/Fair", label: <Checkbox onChange={onChangeFilter}>Light/Fair</Checkbox> },
        { key: "Natural", label: <Checkbox onChange={onChangeFilter}>Natural</Checkbox> },
        { key: "Shimmer", label: <Checkbox onChange={onChangeFilter}>Shimmer</Checkbox>},
      ],
    },
    {
      key: "Formulation",
      label: "Formulation",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Bullet/ Stick", label: <Checkbox onChange={onChangeFilter}>Bullet/ Stick</Checkbox>
         },
        { key: "Creamy", label: <Checkbox onChange={onChangeFilter}>Creamy</Checkbox> },
        { key: "Liquid", label: <Checkbox onChange={onChangeFilter}>Liquid</Checkbox> },
        { key: "Mousse", label: <Checkbox onChange={onChangeFilter}>Mousse</Checkbox>},
      ],
    },
    {
      key: "Undertone",
      label: "Undertone",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Neutral/Pink", label: <Checkbox onChange={onChangeFilter}>Neutral/Pink</Checkbox>
         },
        { key: "Warm", label: <Checkbox onChange={onChangeFilter}>Warm</Checkbox> },
        
      ],
    },
    {
      key: "Easy of Use",
      label: "Easy of Use",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Advanced", label: <Checkbox onChange={onChangeFilter}>Advanced</Checkbox>
         },
        { key: "Beginner", label: <Checkbox onChange={onChangeFilter}>Beginner</Checkbox> },
        
      ],
    },
    {
      key: "Benfits",
      label: "Benfits",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Cruelty Free 2", label: <Checkbox onChange={onChangeFilter}>Cruelty Free</Checkbox>
         },
        { key: " Transfer-Proof 2", label: <Checkbox onChange={onChangeFilter}>Transfer-Proof</Checkbox> },
        { key: " Water Resistant @", label: <Checkbox onChange={onChangeFilter}>Water Resistant</Checkbox> },
        { key: "Vegan", label: <Checkbox onChange={onChangeFilter}>Vegan</Checkbox> },
        { key: "Long-Lasting", label: <Checkbox onChange={onChangeFilter}>Long-Lasting</Checkbox> },
        
      ],
    },
    {
      key: "pack",
      label: "Pack size",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Cruelty Free", label: <Checkbox onChange={onChangeFilter}>Cruelty Free</Checkbox>
         },
        { key: " Transfer-Proof", label: <Checkbox onChange={onChangeFilter}>Transfer-Proof</Checkbox> },
        { key: " Water Resistant", label: <Checkbox onChange={onChangeFilter}>Water Resistant</Checkbox> },
        { key: "Vegan 2", label: <Checkbox onChange={onChangeFilter}>Vegan</Checkbox> },
        { key: "Long-Lasting @", label: <Checkbox onChange={onChangeFilter}>Long-Lasting</Checkbox> },
        
      ],
    },
    {
      key: "skin",
      label: "Skin Type",
      // icon: <MdManageAccounts />,
      children: [
        { key: "Cruelty Free 4", label: <Checkbox onChange={onChangeFilter}>Cruelty Free</Checkbox>
         },
        { key: " Transfer-Proof 4", label: <Checkbox onChange={onChangeFilter}>Transfer-Proof</Checkbox> },
        { key: " Water Resistant 4", label: <Checkbox onChange={onChangeFilter}>Water Resistant</Checkbox> },
        { key: "Vegan 5", label: <Checkbox onChange={onChangeFilter}>Vegan</Checkbox> },
        { key: "Long-Lasting 5", label: <Checkbox onChange={onChangeFilter}>Long-Lasting</Checkbox> },
        
      ],
    },
  ]



  useEffect(()=>{
    getproducts.mutate({userId:"Shaurya"},{
      onSuccess:(data)=>{
       setProductData(data.data)
    
      }
    })
  },[])
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <div className="shadow-2xl border-2 h-12 flex items-center px-6 font-medium">
        Home | Exclusive Treats
      </div>
      <div className="flex justify-center gap-10">
        <div className="w-[28%] border-2 bg-[#e8e8e8]">
          <div className="m-auto">
            <SideMenu labelValues={SideMenuArr1} OnChangeFilterSort={OnChangeFilterSort} />
            <SideMenu  labelValues={sideMenuArr}   />
          </div>
        </div>
        <div className="w-[70%] flex flex-wrap gap-10 my-10 ">
          {productData?.map((ele,idx)=>{
            
            return(
            <div key={idx}>
              <Cards data={ele} id={ele._id} />
            </div>)
})}
        </div>
      </div>
      <Footers/>
    </div>
  );
};
