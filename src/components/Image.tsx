import React from 'react'



interface imageProps{
    id: Number ,
    url: string,
    label: String
}


const Image = ({ id, url, label}: imageProps) => {
    return (
        <div className="relative overflow-hidden rounded-lg md:rounded-2xl mb-8" >

            <div className="absolute text-white over opacity-0 hover:opacity-100 top-0 left-0 w-full h-full pt-2 md:pt-4 pr-2 md:pr-4 pb-5  pl-4 md:pl-6 md:pb-8 flex flex-col justify-between overflow-hidden rounded-lg md:rounded-2xl z-30">
                <button className="px-2 py-1 md:px-4 self-end text-[#eb5757] border border-[#eb5757] text-xs md:text-base" data-id={id} >Delete</button>
                <h1 className=" w-12 self-start justify-self-start font-extrabold text-sm md:text-lg leading-4 md:leading-6">{label}</h1>
            </div>

            <img className="w-full h-auto rounded-lg md:rounded-2xl overflow-hidden " src={url} alt="image"/>

        </div>
    )
}

export default Image