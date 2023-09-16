import React from 'react'
import './menu.css';import logo from './Logo.png';
import { faHome, faVideo,faTelevision,faTrailer,faLog} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function menu() {
  return (<div className='moviebox'>
    <div className='logo'><img src={logo} alt="n"  className="d-inline p-2 "/></div>
     <div className='menu-links'>
      <a href={`/`}><FontAwesomeIcon icon={faHome} />&nbsp; Home</a>
       <a href='' ><FontAwesomeIcon icon={faVideo}  />&nbsp; Movies</a>
        <a href=''><FontAwesomeIcon icon={faTelevision}  />&nbsp;&nbsp;TvSeries</a>
         <a href=''><FontAwesomeIcon icon={faTrailer}  />&nbsp;Upcoming</a>
     </div>
   <div className='tickets'><p className='ticket-text'>Play movie quizes
and earn
free tickets</p>
<button className='ticket-button'>Start Playing</button>
</div>
    <div className='logout-menu'><a href=''>Logout</a></div>
      
    
    

</div>
  )
}

export default menu