import React, {useState} from 'react'

interface headerProps{
    openModal: VoidFunction
}
const Header = ({ openModal} :headerProps) => {
    const [ isOpen, setIsOpen ] = useState()
  return (
    <header>
        <div className="flex justify-between px-5 md:px-12 lg:px-24 pt-5 md:pt-8">
            <div className="flex">
                <span className="material-symbols-outlined pt-2">
                    person
                    </span>
                <div className="ml-2">
                    <h1 className="text-sm font-extrabold leading-6">My Unsplash</h1>
                    <h3 className="leading-3 text-xs">Code Hashira</h3>
                </div>
                <div className="hidden ml-5 md:block w-[300px]">
                    <form className="flex items-center">   
                        <label htmlFor="simple-search" className="sr-only">Search </label>
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name" required/>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <button type="button" className="px-4 md:px-5 py-2 md:py-3 lg:px-6 lg:py-4 font-bold text-base leading-5 rounded-lg md:rounded-xl bg-[#3DB46D] text-white" onClick={openModal}>Add photo</button>
            </div>
        </div>
        <div className="px-7 pt-5 md:hidden">
            <form className="flex items-center">   
                <label htmlFor="simple-search" className="sr-only">Search </label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name" required/>
                </div>
            </form>
        </div>
    </header>
  )
}

export default Header