import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='w-full h-[60px] bg-white flex justify-around items-center'>
    <img className='w-[150px] h-[40px] cursor-pointer' src="https://www.pngkey.com/png/full/246-2462602_e-library-logo-png.png" alt="" />
    <ul className='flex list-none gap-24 cursor-pointer text-green-800 '>
        <li><Link className='linknav' to={"/"}>Home</Link></li>
        <li> <Link className='linknav' to={"/Book"}>Books</Link></li>
        <li> <Link className='linknav' to={"/Footer"}>Contact</Link></li>
    </ul>
</div>
  )
}

export default Navbar