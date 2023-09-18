import React, { useState, useEffect } from "react";
import "./style.css";import imdb from '../assets/imd.png';import favorties from'../assets/Heart.png';
import tomato from '../assets/tomato.png';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { NavLink } from "react-router-dom";
import Pagination from "../Components/Pagination";
import logo from '../assets/Logo.png';import { img_300, unavailable } from "../Components/config";
const Screen = () => {
   const [state, setState] = useState([]);
    const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}
  const [page, setPage] = useState(1); // initialised the page state with the initial value of 1
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  
    const [searchTerm, setSearchTerm] = useSemiPersistentState();
     
     
 const handleSearch = event => {
  setSearchTerm(event.target.value);

   };
  
  const fetchTrending = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=3d820eab8fd533d2fd7e1514e86292ea&page=${page}`);
    const dataJ = await data.json();
    // console.log(dataJ.results);
    setState(dataJ.results);
    localStorage.setItem('item', JSON.stringify(dataJ.results));
  };
const getAsyncStories = () =>
  new Promise(resolve =>
    setTimeout(
      () => resolve({ data: { movies: state } }),
      2000
    )
  );
 
  useEffect(() => {
    
    setIsLoading(true);

    getAsyncStories()
      .then(result => {
        fetchTrending();
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, [page]);
  console.log(state);
  return (
    <>
    {isLoading ? (
      <div className="t-20 text-center load">
       <div class="spinner-border" role="status">
 </div>
  <span class="sr-only">Loading...</span>
 </div>
      ) :
 
    <div className="index">
      <div className="div-3">
        <header className="header">
          <div className="navbar">
            <div className='logo-instance'><img src={logo} alt="n"  className="d-inline p-2 "/></div>
            <div >
             
              <input type='text' className="search-2" onChange={handleSearch } placeholder={'What do want to watch?'}  />
            <svg
      className={`search search-1`}
      fill="white"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        stroke={'white'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
            </div>
            <div className="menu">
              <div className="text-wrapper-3">Sign in</div>
              <div className="menu-alt-wrapper">
                 <svg
      className={`menu-alt-4-1 "menu-alt"`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
        fill={'white'}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
        fill={'white'}
        fillRule="evenodd"
      />
    </svg>
             </div>
            </div>

          </div>
          <div className="description-box">
            <p className="text-wrapper-4">John Wick 3 : Parabellum</p>
            <div className="rating-3">
              <div className="IMDB">
                <img
                  className="img-2"
                  alt="Img"
                  src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/65079c89563939b650df9853/img/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote--1.png"
                />
                <div className="text-wrapper-5">86.0 / 100</div>
              </div>
              <div className="rotten-tomatoes">
                <img
                  className="pngitem-2"
                  alt="Pngitem"
                  src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/65079c89563939b650df9853/img/pngitem-1381056-1.png"
                />
                <div className="text-wrapper-5">97%</div>
              </div>
            </div>
            <p className="john-wick-is-on-the">
              John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14
              million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="trailButton">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white"/>
</svg>
              <div className="watch-trailer">WATCH TRAILER</div>
            </button>
          </div>
          <div className="pagination-box">
            <div className="pagination">
        
            </div>
            <div className="rectangle" />
          </div>
        </header>
        <div className="featured-movie a" style={{alignItems:'left',}}>
          <div className=" d-flex flex-row justify-content-between">
            <div className="text-wrapper-9 ">Featured Movie</div>
            <div className="see-more">
              <div className="text-wrapper-10" style={{color:'red'}}>See more</div>
           
            </div>
          </div>
           <div className="row py-5 my-4 movie-list">{state.map((Val) => {
            
            const {
              name,
              title,
              poster_path,
              first_air_date,
              release_date,orignal_language,
              media_type,vote_average,popularity,
              id,
            } = Val;

            return (
              <>
                <div data-testid="movie-card"
                  key={id}
                  className="col-md-3 col-sm-4 py-3 d-flex justify-content-left g-4"
                  id="card"
                >

                  {/* <NavLink
                    to={}
                    style={{ color: "white", textDecoration: "none" }}
                  > */}
                  <div><NavLink to={`/movie-detail/${id}`} >
                    <img width={260} data-testid="movie-poster"
                      src={
                        poster_path ? `${img_300}/${poster_path}` : unavailable
                      }
                      className="card-img-top pt-3 pb-0 px-0"
                      alt={title}
                    /></NavLink>
                     <div className="d-flex flex-md-row justify-content-between ">
                    <div className="movieType border-10 text-center">{media_type === "tv" ? "TV SERIES" : "Movie"}</div>
                    <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter">
 
                    <div className="movieFav border-10 text-center"><img alt='favorites' src={favorties}/></div>
                   </button>
                    </div>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Added to favourites</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
  
    </div>
  </div>
</div>
                    <div className="card-body">
                      <div data-testid="movie-release-date" className="d-flex flex-column align-self-start text-gray" >{new Date(first_air_date).getFullYear() || new Date(release_date).getFullYear()}</div>
                     <NavLink to={`/${media_type}-detail/${id}`} style={{textDecoration:"none",color:"black"}}> <h5 data-testid="movie-title" className="card-title fs-5 align-items-left">
                        {title || name}
                      </h5></NavLink>
                      <div className="d-flex flex-md-row justify-content-between ">
                       <div > <img src={imdb} alt='imdb'/> {Math.round(vote_average) * 10}/100  </div> <br></br>
                       <div className="d-flex justify-content-end px-2"> <img src={tomato} alt='imdb' width={16}/> {Math.round(vote_average) * 10}/100  </div>
                      </div>
                      <div className="d-flex fs-6 align-items-left justify-content-left movie-genre">
                        <div className="">{media_type === "tv" ? "Action" : "Adventure"}</div>
                        
                      </div>
                    </div>
                  </div>
                  {/* </NavLink> */}
                </div>
                {/* <AppProvider media_type={media_type} id={id} /> */}
              </>
            );
          })}
          <Pagination page={page} setPage={setPage} /></div>
         <div className="overlap-group">
          
        <footer className="footer footer1">
          <img
            className="social"
            alt="Social"
            src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/65079c89563939b650df9853/img/social.svg"
          />
          <div className="links">
            <div className="text-wrapper-11">Conditions of Use</div>
            <div className="text-wrapper-11">Privacy &amp; Policy</div>
            <div className="text-wrapper-11">Press Room</div>
          </div>
          <p className="text-wrapper-12">© 2023 MovieBox by Chukwudalu Nonyelim</p>
        </footer>
      </div>
    </div>  </div>  </div>}
    </>
  );
};
export default Screen;