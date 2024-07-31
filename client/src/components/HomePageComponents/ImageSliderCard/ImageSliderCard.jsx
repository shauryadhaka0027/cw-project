import React, { useState } from 'react';
import { Carousel } from 'antd';
import { Cards } from '../Card/Cards';
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";


const ImageSliderCard = ({data}) => {
  const [count, setCount] = useState(0);

  const contentStyle = {
    height: 'auto',
    color: '#fff',
    lineHeight: '120px',
    textAlign: 'center',
    backgroundImage: `url(https://media.istockphoto.com/id/1538630313/vector/glitter-confetti-and-serpentine-on-black-background.jpg?s=1024x1024&w=is&k=20&c=yHynxfBfm9R9-veNEwVWFvwtXtsoW8nga0IRAQxKesE=)`,
  };

  const previousButton = () => {
    setCount(prev => (prev === 0 ? 1 : prev - 1));
    console.log("prev", count);
  };

  const nextButton = () => {
    setCount(prev => (prev === 1 ? 0 : prev + 1));
    console.log("next", count);
  };

  return (
    <>
      <div className=''>
        <Carousel arrows infinite={false}>
          <div className=''>
            <div style={contentStyle} className='py-8'>
              <h1 className='text-2xl mb-8 py-6'>
              <div className="flex items-center justify-center my-4">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-2xxl">
            {data?.title}
            </span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
              </h1>
              <div className='flex gap-5 justify-center'>
                <button className='rounded-lg w-4 text-2xl' disabled={count === 0} onClick={previousButton}><LeftSquareOutlined /></button>
                {count === 0 && (
                  <>
                    {data?.arr1.map((ele, idx) => (
                      <div key={idx}>
                        <Cards data={ele} />
                      </div>
                    ))}
                  </>
                )}
                {count === 1 && (
                  <>
                    {data?.arr2.map((ele, idx) => (
                      <div key={idx}>
                        <Cards data={ele} />
                      </div>
                    ))}
                  </>
                )}
                <button className='text-2xl' onClick={nextButton} disabled={count === 1}><RightSquareOutlined /></button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ImageSliderCard;

