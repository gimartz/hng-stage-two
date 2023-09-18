import React, { useState, useEffect } from "react";
 import { NavLink } from "react-router-dom";
import { img_300, unavailable } from "../Components/config";
// import { AppProvider } from "../Components/context";
import imdb from '../assets/imd.png';import favorties from'../assets/Heart.png';
import tomato from '../assets/tomato.png';import Banner from './banner';
import Pagination from "../Components/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trending.css'
import Footer from "../Components/Footer";
const Trending = () => {
  const [state, setState] = useState([]);
  const [page, setPage] = useState(1); // initialised the page state with the initial value of 1
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
   
  const fetchTrending = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=3d820eab8fd533d2fd7e1514e86292ea&page=${page}`);
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
const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
 
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
      <div className="container-fluid" >

         <Banner/>
         
      <div className="d-flex">
        
        <div className="row py-5 my-4">
      <div className ="d-flex flex-row justify-content-between">
         <div> <h2>Featured Movie</h2></div>
         <p style={{color:'red'}}>See More {'>'}</p>
         </div>
          {state.map((Val) => {
            
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
          <Pagination page={page} setPage={setPage} />
          <Footer />
        </div>
      </div>  </div>
}
    </>
  );
};

export default Trending;
