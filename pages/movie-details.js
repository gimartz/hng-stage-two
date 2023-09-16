import React , { useEffect, useState, useContext }  from 'react'
import './movieDetails.css';import { faCirclePlay, faTicket,faListUl} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, NavLink } from 'react-router-dom'
import noimage from './movies.jpg'
import Menu from './menu'
import useDetails from './usedetail';
const ShowTimes=(color, background,border)=>{
<div className='seeTimes'style={{backgroundColor:background,borderRadius:border}}>
        <p className='seeTimesText' style={{color:color}} >See ShowTimes</p>
      </div>
}

export const Moviedetails = (name,id) => {
  //const { id } = useParams()
   const { details, loading, error } = useDetails(name, id);
 
  const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);
 const APIKEY ='3d820eab8fd533d2fd7e1514e86292ea';

 if (!loading && error) {
        return <div style={{ textAlign: 'center' }}>error</div>;
    }
  if (!loading && !error && details) {
  return (

    <div className=''>
      <Menu />
          <div className='cont'>
         <div alt='poster' className='moviePosters' style={{backgroundImage: `url(${details.backdrop_path === null ? noimage :"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path} )`,borderRadius:20}} >
      <div className='playButton'><FontAwesomeIcon icon={faCirclePlay} size="lg" style={{color:"white",marginTop:"5px",verticalAlign:"middle"}}/><p style={{color:"white",cursor:'pointer'}}>Watch Trailer</p></div>
</div>
       
    <div class="grid-container">
         <div className='movieTitle'>
      {moviedet.title} {name === 'movie' ? details.original_title : details.original_name}
      <div className='d-flex justify-center flex-wrap'>
              {moviegenres.map((tag) => (
                
                  <div key={tag.id} style={{color:'white'}}>{tag.name}</div>
            
              ))}
            </div>
    </div>
     <div className='movieRatings'>
      
    </div>
        <div className='movieDesc'>
      {moviedet.overview}
    </div>
     <div className='movieShowtimes'>
      <div className='seeTimes'>
        <p className='seeTimesText'><FontAwesomeIcon icon={faTicket} style={{marginTop:"5px",verticalAlign:"middle"}} /> &nbsp;See ShowTimes</p>
      </div>
       <div className='seeTime'>
        <p className='seeTimeText'><FontAwesomeIcon icon={faListUl} style={{marginTop:"5px",verticalAlign:"middle"}}/>&nbsp;More Watch options</p>
      </div>
    </div>
     <div className='movieCast'>
      <p className='castmembers'> Directors:</p>
      <p className='castmembers'>Writers:</p>
      <p className='castmembers'>Stars:</p>
    </div>
     <div className='movieRelated'>
      
    </div>
    </div>
    </div> </div>
  )
}
}
export default Moviedetails
