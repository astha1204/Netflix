import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import carotIcon from '../../assets/caret_icon.svg'
import pfp from '../../assets/profile_img.png'
import { logout } from '../../firebase'



const Navbar = () => {

  const navRef=useRef();

  useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scrollY>=80)
          {
            navRef.current.classList.add("nav-dark")
          }else{
            navRef.current.classList.remove("nav-dark")
          }
        })
  },[])

  return (
    <div ref={navRef} className='w-full py-[20px] px-[6%] flex justify-between fixed text-[14px] navbar'>
      <div className="navleft flex items-center gap-[50px] ">
        <img src={logo} alt="netflix" className='w-[90px]'></img>
        <ul className='flex gap-[20px] list-none'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News and Popular</li>
            <li>My List</li>
            <li>Browse By Language</li>
        </ul>
      </div>
      <div className="navright flex items-center gap-[20px]">
        <img src={searchIcon} alt="icon" className="w-[20px] cursor-pointer"></img>
        <p>Children</p>
        <img src={BellIcon} alt="icon" className="w-[20px] cursor-pointer"></img>
       
        <div className="navbar-profile relative flex items-center gap-[10px] cursor-pointer">
        <img src={pfp} alt="icon" className='profile rounded w-[35px] '></img>
        <img src={carotIcon} alt="icon"></img>
         {/* //dropdown */}
         {/* if drowndown absolute h then profile wlaa relative hojaega */}
         <div className="dropdown absolute top-[100%] right-0 ">
          <p className='text-[13px] cursor-pointer' onClick={()=>logout()}>Sign out of Netflix</p>
         </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
