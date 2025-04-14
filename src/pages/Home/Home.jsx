import React from 'react'
import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png';
import moreinfo from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <div className='home '>
      <Navbar/>
      <div className="hero relative ">
        <img src={banner} alt="bg" className='bannerimg w-[100%]'></img>
        <div className="herocaption absolute w-[100%] pl-[6%] bottom-0">
        <img src={herotitle} alt="title" className='caption-img w-[90%] max-w-[420px] mb-[30px]' />
          <p className='textt '>The Protector is a steadfast guardian, standing firm in the face of danger. With unwavering loyalty and unmatched resilience, they shield others from harm, always placing duty above self.</p>
          <div className="hero-btns flex gap-[10px] mb-[50px]">
            <button className='btn border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] '>
              <img src={play} alt="play" className='w-[25px]'></img>
              Play</button>

              <button className='btnn rounded border-0 outline-0 py-[8px] px-[20px] inline-flex items-center gap-[10px] text-[15px] text-white bg-[#6d6d6eb3] font-semibold cursor-pointer '>
  <img src={moreinfo} alt="moreinfo" className='w-[25px]' />
  More Info
</button>
          </div>
          <div className="title-cards"> <TitleCards /></div>
         
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"BlockBuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only On netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Picks for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
