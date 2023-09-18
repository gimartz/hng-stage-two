import React  from 'react'
//import Moviedetails from './movie-details';
import { useEffect, useState, useContext }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Page/Trending.css'
import './movieDetails.css';import { faCirclePlay, faTicket,faListUl} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, NavLink } from 'react-router-dom'
import noimage from '../assets/movies.jpg';import star from '../assets/Star.png'
import Menu from './menu'
import './menu.css';
export const Filmdetails = ({media}) => {
   const { id } = useParams()
     const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
const APIKEY ='3d820eab8fd533d2fd7e1514e86292ea';
  const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchMovie = async () => {
        try {
                setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${APIKEY}&language=en-US`
    );
    const moviedetail = await data.json();
    
    setMoviedet(moviedetail);
     console.log(moviedetail);
    setMoviegenres(moviedetail.genres);
        setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
   
  };

  const fetchCast = async () => {
        try {
                setLoading(true);
    const castdata = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${APIKEY}&language`
    );
    const castdetail = await castdata.json();
  
  
    setCastdata(castdetail.cast);
      console.log(castdata)
    setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
  }

  const fetchVideo = async () => {
    try {
                setLoading(true);
    const data = await fetch(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${APIKEY}&language=en-US`
    );
    const videodata = await data.json();
    //const arr = videodata.results;
    
    setVideo(videodata.results[0]);
    console.log(videodata.results);
     setError(false);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setLoading(false);
                setError(true);
            }
  };

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideo();
  }, []);

  
  

  return (
    <>
{loading ? (
      <div className="t-20 text-center load">
       <div class="spinner-border" role="status">
 </div>
  <span class="sr-only">Loading...</span>
 </div>
      ) :
    <div className=''>
     <Menu />
          <div className='cont'>
     
         <div alt='poster' className='moviePosters' style={{backgroundImage: `url(${moviedet.backdrop_path === null ? noimage :"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path} )`,borderRadius:20}} >
      <div className='d-flex flex-row'>{Array.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
       <>
                    <>  <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='d-flex flex-row' >
                       
        <div className='playButton'><FontAwesomeIcon icon={faCirclePlay} size="lg" style={{color:"white",marginTop:"5px",verticalAlign:"middle"}}/><p style={{color:"white",cursor:'pointer'}}>Watch Trailer</p></div>
</a>    </>
                </>
              ))
              }
</div></div>
       
    <div class="grid-container">
      <div className="group-2 ">
          <p  className="top-text">
            <span  data-testid='movie-title' className="span">{moviedet?.title || moviedet?.name || moviedet?.original_name}</span>
            <span className="text-wrapper-3">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
            <span className="span">{new Date(moviedet?.first_air_date).getFullYear() || new Date(moviedet?.release_date).getFullYear()}</span>
            <span className="text-wrapper-3">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
           
           
            <span  className="span">2h 10m</span>
          </p>
         <div className="overlap">
         
          <p className="after-thirty-years">
          {moviedet.overview} </p>
        </div>
         </div>
   
      <div className='flex justify-center flex-wrap d-flex flex-row gap-2'>
              {moviegenres.map((tag) => (
                <>
                  <div key={tag.id} className=' button'>{tag.name}</div>
                </>
              ))}
           
    </div>
     <div className='movieRatings'>
     
<img alt='star' src={star} width={30} height={30} className=''/>{moviedet?.vote_average }
    </div>
     <div></div>
     <div className='movieShowtimes'>
      <div className='seeTimes'>
        <p className='seeTimesText'><FontAwesomeIcon icon={faTicket} style={{marginTop:"5px",verticalAlign:"middle"}} /> &nbsp;See ShowTimes</p>
      </div>
       <div className='seeTime'>
        <p className='seeTimeText'><FontAwesomeIcon icon={faListUl} style={{marginTop:"5px",verticalAlign:"middle"}}/>&nbsp;More Watch options</p>
      </div>
    </div>
     <div className='d-flex flex-row 'style={{marginTop:'-51px'}}><div className="group-5"><p className="stars-tom-cruise">
      <p className='castmembers text-wrapper-11'>Stars:
       
                </p> 
                  
                    {castdata.map((cast) => (
                  <>
                    {cast.profile_path !== null ?  <>
                      <div className='text-wrapper-11' style={{width:'100px;', grid:""}}>
                      {cast.name}
                     </div>
                    </> : null}
                  </>
                ))}
         </p>
         
     </div>
   
     <div>
      
  
       </div> 
     
    </div>
     <div className='movieRelated'>
      
    </div>
    </div>
    </div> </div>
 }
    </>
  );
}

export default Filmdetails
