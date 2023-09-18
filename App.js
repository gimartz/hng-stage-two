import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Page/screen";
import {Filmdetails}  from './pages/movieList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />       
       
                 
           <Route path="/tv-detail/:id" element={<Filmdetails media="tv"/>} />
         <Route path="/movie-detail/:id" element={<Filmdetails media="movie"/>} />
      </Routes>
    </BrowserRouter>
  );
}


