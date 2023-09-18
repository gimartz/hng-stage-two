import React from 'react'
import './menu.css';import logo from '../assets/Logo.png';
import { faHome, faVideo,faTelevision,faTrailer,faLogout} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function menu() {
  return (<div className='moviebox'>
     <div className="group-23">
          <div className="overlap-18">
            <div className="rectangle-9" />
           <div className='logo'><img src={logo} alt="n"  className="d-inline p-2 "/></div>
       <div className="group-24">
              <a href ={'/'}className="text-wrapper-24">Home</a>
              <img
                className="home"
                alt="Home"
                src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/home@2x.png"
              />
            </div>
            
            <div className="group-25">
              <div className="overlap-group-5">
                <img
                  className="vector-6"
                  alt="Vector"
                  src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/vector-7.svg"
                />
                <div className="text-wrapper-25">Movies</div>
                <img
                  className="movie-projector"
                  alt="Movie projector"
                  src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/movie-projector@2x.png"
                />
              </div>
            </div>
            <div className="text-wrapper-26">TV Series</div>
            <div className="text-wrapper-27">Upcoming</div>
            <img
              className="TV-show"
              alt="Tv show"
              src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/tv-show@2x.png"
            />
            <img
              className="calendar"
              alt="Calendar"
              src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/calendar@2x.png"
            />
            <div className="group-26">
              <div className="text-wrapper-28">Log out</div>
              <img
                className="logout"
                alt="Logout"
                src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/6507986efb0a69ad0d8795b1/img/logout@2x.png"
              />
            </div>
            <div className="group-27">
              <div className="overlap-19">
                <div className="rectangle-10" />
                <div className="element-people-are">
                  50k people are playing
                  <br />
                  now
                </div>
                <p className="play-movie-quizes">
                  Play movie quizes
                  <br />
                  and earn
                  <br />
                  free tickets
                </p>
                <div className="rectangle-11" />
                <div className="text-wrapper-29">Start playing</div>
                <div className="ticket-confirmed" />
              </div>
            </div>
          </div>
        </div>

</div>
  )
}

export default menu