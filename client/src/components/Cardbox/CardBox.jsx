import React from 'react'

export const CardBox = ({data,title}) => {
  return (
    <div className='bg-[#f4f4f4]'>
             <div className="flex items-center justify-center my-4">
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
            <span className=" font-bold text-lg">
             {title}
            </span>
            <hr className=" border-0 border-t-2 border-pink-500 mx-2 w-10" />
          </div>
             <div className='flex justify-center gap-8  py-12' >
            {data?.map((ele,idx)=>[
             <div className='max-w-96 r' key={idx}>
             <img  className='rounded-2xl' src={ele} alt="" />
             </div>
            ])}
            </div>
        </div>
  )
}
