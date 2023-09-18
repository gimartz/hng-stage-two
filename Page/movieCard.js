/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Heart } from "../Heart";
import "./style.css";

const MovieCard = ({
  className,
  posterClassName,
  text ,
  hasTvSeries = true,
  favoriteClassName,
  text1 ,
  text2 ,
  text3,
  text4 
}) => {
  return (
    <div data-testid="movie-card" className={`movie-card ${className}`}>
      <div data-testid="movie-poster" className={`poster ${posterClassName}`}>
        <div className="rating">
          {hasTvSeries && (
            <div className="TV-series">
              <div className="div">TV SERIES</div>
            </div>
          )}

          <div className={`favorite ${favoriteClassName}`}>
            <Heart />
          </div>
        </div>
      </div>
      <h3 data-testid="movie-release-date"  className="text-wrapper-2">{text1}</h3>
      <div className="stranger-things">{text2}</div>
      <div className="rating-2">
        <div className="div-2">
          <img
            className="img"
            alt="Img"
            src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/65079c89563939b650df9853/img/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote--1.png"
          />
          <div className="element">{text3}</div>
        </div>
        <div className="div-2">
          <img
            className="pngitem"
            alt="Pngitem"
            src="https://cdn.animaapp.com/projects/60fd2757869e989434a4a089/releases/65079c89563939b650df9853/img/pngitem-1381056-1.png"
          />
          <div className="element">{text4}</div>
        </div>
      </div>
      <div className="text-wrapper-2">{text}</div>
    </div>
  );
};

MovieCard.propTypes = {
  text: PropTypes.string,
  hasTvSeries: PropTypes.bool,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
};
export default MovieCard;