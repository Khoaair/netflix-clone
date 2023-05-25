/* eslint-disable no-unused-vars */
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { filmOptions } from '../utils/options';
import { request } from '../utils/request';
import customFetch from '../utils/axios';
import { imgUrl } from '../utils/constant';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Featured = ({ type }) => {
  const [movie, setMovie] = useState([]);

  const [isReadMore, setIsReadMore] = useState(false);

  const handleOnClick = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    const fetchMoies = async () => {
      try {
        const res = await customFetch.get(`${request.fetchTreding}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchMoies();
  }, []);
  console.log(isReadMore);
  return (
    <div
      className='featured'
      style={{
        backgroundImage: `url(${imgUrl}${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select name='genre' id='genre'>
            <option>Genres</option>
            {filmOptions.map(item => {
              const { id, value, option } = item;
              return (
                <option key={id} value={value}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      )}
      {/* <img
        src={`${imgUrl}${movie.backdrop_path}`}
        alt='featured image relative'
      /> */}
      <div className='info'>
        <p className='title'>
          {movie?.name || movie?.title || movie?.original_name}
        </p>

        <span className='desc'>
          {isReadMore
            ? movie && movie.overview && movie.overview
            : movie && movie.overview && movie.overview.substring(0, 150)}
          <span>
            {' '}
            <span>
              {' '}
              <button className='show-more text-white' onClick={handleOnClick}>
                {!isReadMore ? 'show more' : 'show less'}
              </button>
            </span>
          </span>{' '}
        </span>

        <div className='buttons'>
          <button className='play'>
            <PlayArrow sx={{ fontSize: '2.125rem' }} />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined sx={{ fontSize: '2.125rem' }} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
