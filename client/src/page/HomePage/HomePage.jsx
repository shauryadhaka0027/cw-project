import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Tab from "../../components/Tab/Tab";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ImageSliderCard from "../../components/HomePageComponents/ImageSliderCard/ImageSliderCard";
import { CardBox } from "../../components/Cardbox/CardBox";
import Footers from "../../components/Footer/Footer";

const imgUrlArr1 = [
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/b73cecf6-ad45-4977-a8c5-62cc37c3b05b.png&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9616f83b-2e9c-4fc8-87a9-01a098e6db9f.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/9616f83b-2e9c-4fc8-87a9-01a098e6db9f.jpg&w=1920&q=75",
];
const imgUrlArr2 = [
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/a89d9ced-86db-4daf-bf27-d817f01456cb.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/a89d9ced-86db-4daf-bf27-d817f01456cb.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0bdb882c-d58b-4a85-b3ca-b5ac4d681430.jpg&w=1920&q=75",
];
const slidefirst = [
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FFigma-banner-1-1-600x500-ezgif.com-optimize_1.gif%3Fv%3D1718014347&w=256&q=75",
    price: "555",
    title: "Mousse Muse Lip cream",
    desc: "12 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FMatte-Attack-Transferproof-Lipstick.jpg%3Fv%3D1719855043&w=256&q=75",
    price: "749",
    title: "Matte-Attack TransferProof Lipstick",
    desc: "14 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FMatte-As-Hell-Crayon-Lipstick-Minis-Set-of-3.jpg%3Fv%3D1719867590&w=256&q=75",
    price: "999",
    title: "Matte as Hell Crayon Lipstick",
    desc: "2 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FDream-Cover-SPF15-Mattifying-Compact.jpg%3Fv%3D1719842368&w=256&q=75",
    price: "549",
    title: "Dream Cover SPF15 Mattifying Compact",
    desc: "4 Shade",
  },
];
const imagUrlArr3 = [
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/5908fd0c-0e17-456c-be70-35b334713f4a.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/5908fd0c-0e17-456c-be70-35b334713f4a.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/6febc296-a481-47eb-8ca5-e904a6ebaf09.jpg&w=1920&q=75",
];

const slideSecond = [
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSmudge-Me-Not-Mini-Liquid-Lipstick-Set-of-4-Power-Up-Your-Pout.jpg%3Fv%3D1719879619&w=256&q=75",
    price: "555",
    title: "Mousse Muse Lip cream",
    desc: "12 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FAll-Set-To-Go-Banana-Powder.jpg%3Fv%3D1719853829&w=256&q=75",
    price: "749",
    title: "Matte-Attack TransferProof Lipstick",
    desc: "14 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FAll-Set-To-Go-Translucent-Powder.jpg%3Fv%3D1719839341&w=256&q=75",
    price: "999",
    title: "Matte as Hell Crayon Lipstick",
    desc: "2 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FArch-Arrival-Brow-Definer.jpg%3Fv%3D1719834107&w=256&q=75",
    price: "549",
    title: "Dream Cover SPF15 Mattifying Compact",
    desc: "4 Shade",
  },
];

const slidearr1 = [
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FThe-SUGAR-Classics-Birthday-Special-Kit_b0e1a1a9-4c6a-4ec9-9d9d-5410e9a351a5.jpg%3Fv%3D1721403600&w=256&q=75",
    price: "555",
    title: "Mousse Muse Lip cream",
    desc: "12 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FVineetas-Favourite-Makeup-Kit_5094e434-0af3-47be-8095-e09d590c2599.jpg%3Fv%3D1720176178&w=256&q=75",
    price: "749",
    title: "Matte-Attack TransferProof Lipstick",
    desc: "14 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FVineetas-Favourite-Makeup-Kit_5094e434-0af3-47be-8095-e09d590c2599.jpg%3Fv%3D1720176178&w=256&q=75",
    price: "999",
    title: "Matte as Hell Crayon Lipstick",
    desc: "2 shade",
  },
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FSUGAR-Signature-Makeup-Kit.jpg%3Fv%3D1719901641&w=256&q=75",
    price: "549",
    title: "Dream Cover SPF15 Mattifying Compact",
    desc: "4 Shade",
  },
];
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
  {
    img: "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2FBlushin-Poppin-Value-Set.jpg%3Fv%3D1719880199&w=256&q=75",
    price: "549",
    title: "Dream Cover SPF15 Mattifying Compact",
    desc: "4 Shade",
  },
];

export const HomePage = () => {
  const imageSliderobj = {
    arr1: slidefirst,
    arr2: slideSecond,
    title: "BEST SEllER",
  };
  const imageSliderobj2 = {
    arr1: slidearr1,
    arr2: slidearr2,
    title: "MAKE KIT & COMBO",
  };
  return (
    <>
      <div>
        <Navbar />
        <ImageSlider />
        <div className="pt-20">
        <ImageSliderCard data={imageSliderobj} />

        </div>
        <CardBox data={imgUrlArr1} title={"HOT DEALS"} />
        <ImageSliderCard data={imageSliderobj2} />
        <CardBox data={imgUrlArr2} title={"SUGAR ICONICS IN-FOCUS"} />
        <div className="w-full py-4">
          <div className="flex items-center justify-center my-4">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-lg">
            CLUB VELLVETTE
            </span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
          <div className="w-[90%] m-auto rounded-2xl py-8">
            <img
              className="rounded-2xl"
              src="https://d32baadbbpueqt.cloudfront.net/Clubvellvette/Desktop_Banner.png"
              alt=""
            />
          </div>
        </div>
        <CardBox data={imagUrlArr3} title={"EXCLUSIVE BIRTHDAY COMBOS"} />
        <div className="w-full py-4 ">
          <div className="flex items-center justify-center my-4">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-lg">MOUSSE MUSE LIP CREAM</span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
          <div className="w-[80%]  m-auto rounded-2xl py-8 ">
            <img
              className="rounded-2xl w-[90%] m-auto h-96 "
              src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/85d7b52c-6823-404f-99e0-d6e1ba1d4019.jpg&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
        <div className="w-full py-4">
          <div className="flex items-center justify-center my-4">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-lg">REFER YOUR FRIENDS</span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
          <div className="w-[90%] m-auto rounded-2xl py-8">
            <img
              className="rounded-2xl"
              src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb1221319-f8de-4522-90bb-ad1f5365be34.jpg&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
        <Footers />
      </div>
    </>
  );
};
