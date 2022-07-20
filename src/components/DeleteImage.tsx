import React from 'react'

const DeleteImage = () => {
  return (
    <section className="flex justify-center">
    <div className="w-[90%] md:w-[70%] lg:max-w-[620px] pt-3 pb-3 px-4 lg:pt-6 lg:px-8 rounded-xl lg:pb-6">
        <h3 className="lg:text-2xl font-medium leading-8">Add a new photo</h3>
        <div className="mt-5">
            <label><h5 className="text-md lg:text-sm font-medium leading-5">Label</h5></label>
            <input type="text" name="" id="" className=" p-2 lg:p-[1.1rem] w-full mt-2  rounded-lg md:rounded-xl"/>
        </div>
        <div className="pt-4 lg:pt-7">
            <div className="flex justify-end gap-x-3">
                <button className="px-4 lg:px-5 py-2 lg:py-3 lg:px-6 lg:py-4 text-base font-medium leading-5 rounded-lg md:rounded-xl">cancel</button>
                <button type="submit" className="px-4 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 font-bold text-base leading-5 rounded-lg md:rounded-xl bg-[#eb5757] text-white">Delete</button>
            </div>
            
        </div>
    </div>
    </section>  
  )
}

export default DeleteImage

