import React, { useState, useEffect } from "react";
import logo from './Logo.png';import './Trending.css'
import axios from 'axios';
import requests from "./axios";
import imdb from './imd.png';
import tomato from './tomato.png';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  NavLink } from 'react-router-dom'
function Banner() {
     const [movies, setMovies] = useState([]);
 const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}
 React.useEffect(() => {
   async function fetchMovie(){
    const request =await axios.get(requests.fetchOrginal)
    localStorage.setItem('item', JSON.stringify(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]));
    setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
   
  return request  
}
fetchMovie()
  }, []);
 
  

     const [searchTerm, setSearchTerm] = useSemiPersistentState();
     
     
 const handleSearch = event => {
  setSearchTerm(event.target.value);

   };
  
function truncate(string, n){
  return string?.length > n ? string.substr(0,n -1) +"....":string;
}

 
  return (
    <div>
       <div style={{ backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`, backgroundPosition: "center center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="jumbotron jumbotron-fluid moviePoster ">
            <div class="d-flex flex-row justify-content-between p-16 ">
  <div class="p-2"><img src={logo} alt="n"  className="d-inline p-2 "/></div>
  <div className="p-2 text-white search"><input type='text' onChange={handleSearch } placeholder={'What do want to watch?'} className="inputSearch text-white"/> <FontAwesomeIcon icon={faSearch} /></div>
  <div className="p-2 d-inline-flex align-items-center"><a href="#" style={{ textDecoration:"none",color:"white",padding:"16px"}}>Sign in </a><span className="l-12"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
<circle cx="18" cy="18" r="18" fill="#BE123C"/>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="18" fill="#BE123C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59998 14.4C9.59998 13.7373 10.1372 13.2 10.8 13.2H25.2C25.8627 13.2 26.4 13.7373 26.4 14.4C26.4 15.0628 25.8627 15.6 25.2 15.6H10.8C10.1372 15.6 9.59998 15.0628 9.59998 14.4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59998 21.6C9.59998 20.9373 10.1372 20.4 10.8 20.4H25.2C25.8627 20.4 26.4 20.9373 26.4 21.6C26.4 22.2628 25.8627 22.8 25.2 22.8H10.8C10.1372 22.8 9.59998 22.2628 9.59998 21.6Z" fill="white"/>
</svg>

</svg></span></div>
</div>
  <h1 className="display-4 coverHead">{movies?.title || movies?.name || movies?.original_name}</h1>
  <div className="d-flex flex-sm-row justify-content-between " style={{width:"187px"}}>
                       <div className="text-light" > <img src={imdb} alt='imdb'/> {Math.round(movies?.vote_average) * 10}/100  </div> <br></br>
                       <div className="d-flex justify-content-end px-2 text-light"> <img src={tomato} alt='imdb' /> {Math.round(movies?.vote_average) * 10}/100  </div>
                      </div>
  <p className="lead coverContent">{truncate(movies?.overview, 150)}</p>

  <NavLink  className="btn-watchTrailer" to={`/movie-detail/${movies?.id}`} >
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/>
</svg> Watch Trailer</NavLink>
  <div className="fadeBanner">

  </div>
</div>
    </div>
  )
}

export default Banner;
