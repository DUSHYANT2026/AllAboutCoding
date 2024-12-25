import React from 'react'
import {NavLink} from 'react-router-dom';

function Arrays() {
  return (
    <div className="mx-auto w-full max-w-7xl">

<div className="sm:flex sm:items-center sm:justify-between bg-orange-600 text-white font-bold underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-3xl ">
        Array, String, Matrix And Binary Search
    </span>
</div>



<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray1">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Array Notes with Basic and Easy Questions 
    </span>
</div>
</NavLink>



<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray2">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        String Notes with Basic and Easy Questions 
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray3">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Binary Search Algorithms Notes with Medium Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray4">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Matrix(2D Array) Notes with Medium Questions
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray5">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Most Asked Leetcode Questions 
    </span>
</div>
</NavLink>

<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
<NavLink to="/Narray6">
<div className="sm:flex sm:items-center sm:justify-between bg-blue-400 text-white font-bold  hover:bg-orange-400 transition duration-500 hover:underline rounded-lg px-2 py-6 cursor-pointer shadow-lg">
    <span className="text-gray-100 sm:text-center hidden sm:block text-2xl">
        Hard Questions Asked in Maang Companies 
    </span>
</div>
</NavLink>



    </div>
  )
}

export default Arrays