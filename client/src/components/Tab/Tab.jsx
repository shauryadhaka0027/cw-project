import React from 'react'

const Tab = () => {
    const arrTab=["SUGARPLAY","LIPS","EYES","FACE","NAILS",'SKINCARE',"GIFITING",'BESTSELLER','NEWLAUCHES',"OFFER","BLOGS"]
  return (
    <div className=''>
    <div className='flex justify-evenly h-16   bg-[#1f1f1f] text-[#fff] items-center font-light text-sm '>
      {arrTab.map((ele,idx)=>(
        <div key={idx}>
            {ele}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Tab