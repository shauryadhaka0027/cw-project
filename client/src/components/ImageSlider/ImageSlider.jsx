import React from 'react'
import { Carousel } from 'antd';
import "./imageSlider.css"

const ImageSlider = () => {
    const contentStyle = {
        margin: 0,
        height: 'auto',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
   <>
  
   <div className='pt-32 '>
    <Carousel arrows infinite={false}>
      <div>
       <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F58062064-cd0c-4aee-8e96-30a8e6a7e760.jpg&w=1920&q=100" alt="" />
      </div>
      <div>
        <h3 style={contentStyle}>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbefc3ba7-c1cc-40d7-b2db-42368c27141a.jpg&w=1920&q=100" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3012f287-4903-421c-9406-2b70930299ee.jpg&w=1920&q=100" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7200bab5-6b51-43f1-9a16-eef01e48440f.jpg&w=1920&q=100" alt="" />
        </h3>
      </div>
    </Carousel>
    </div>

  </>

  )
}

export default ImageSlider