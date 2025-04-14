import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import titlecards from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'




const TitleCards = ({title,category}) => {
  //state var for response
  const [apiData,setApiData]=useState([])

  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzZmYjY2NzZjMGMwYWM3YWUwOWY1YjQ2OGNjODY4YyIsIm5iZiI6MTc0MzAwNDQ3Ny4wNzksInN1YiI6IjY3ZTQyMzNkZTI4YWY0MWNmYzc2NTY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RrBHiJfIjb1Av_UsEuf2EGRbejq-mcrS_AvOKoNEQks'
    }
  };

//card-list ki referefencemilgyi is variable me
const handleWheel=(event)=>{
  event.preventDefault();
  // Stops vertical scroll behavior
  cardsRef.current.scrollLeft+=event.deltaY

}
//containerRef.current is the scrollable div we’re targeting.
// .scrollLeft is how far it’s scrolled horizontally from the left.
// We add e.deltaY to it:
// So if the user scrolls down (+deltaY), we move right.
// If the user scrolls up (-deltaY), we move left.

useEffect(() => {
  // const apiKey = import.meta.env.VITE_API_URL // get from TMDB dashboard

  fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener("wheel", handleWheel);
}, []);

  return (
    <div className='titlemain mt-[50px] mb-[30px]'>
      <h2 className='mb-[8px]'>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list flex gap-[10px]" ref={cardsRef}>
        {/* {titlecards.map((card,index)=>{
         return(
          <div className='card relative' key={index}>
            <img className="rounded cursor-pointer max-w-none" src={card.image}/>
            <p className='absolute bottom-[10px] right-[10px]'>{card.name}</p></div>
         )

        })} */}
        {apiData.map((card,index)=>{
        //  return(
        //   <div className='card relative' key={index}>
        //     <img className="rounded cursor-pointer max-w-none" src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}/>
        //     <p className='absolute bottom-[10px] right-[10px]'>{card.original_title}</p></div>
        //  )
        return (
          <Link to={`/player/${card.id}`} className='card relative' key={index}>
             <img className="image rounded cursor-pointer max-w-none" src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}/>
                <p className='absolute bottom-[10px] right-[10px]'>{card.original_title}</p>
          </Link>
        )

        })}
      </div>
      
    </div>
  )
}

export default TitleCards
