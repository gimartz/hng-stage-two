import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Page/Trending";
import {Filmdetails}  from './pages/movieList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />       
       
                 
           <Route path="/tv-detail/:id" element={<Filmdetails media="tv"/>} />
         <Route path="/movie-detail/:id" element={<Filmdetails media="movie"/>} />
      </Routes>
    </BrowserRouter>
  );
}


