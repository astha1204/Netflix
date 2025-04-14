import React, { useState } from 'react'
import './Player.css'
import arrow from '../../assets/back_arrow_icon.png'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzZmYjY2NzZjMGMwYWM3YWUwOWY1YjQ2OGNjODY4YyIsIm5iZiI6MTc0MzAwNDQ3Ny4wNzksInN1YiI6IjY3ZTQyMzNkZTI4YWY0MWNmYzc2NTY1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RrBHiJfIjb1Av_UsEuf2EGRbejq-mcrS_AvOKoNEQks",
    },
  };

  useEffect(() => {
    // const apiKey = import.meta.env.VITE_API_URL  // Use the API key from .env

    // Fetch movie videos using the API key
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err))
  }, [])
  
  
  return (
    <div className='player'>
      <Link to="/"><img src={arrow} alt=""/></Link>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen>
      </iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>
      
    </div>
  )
}

export default Player
