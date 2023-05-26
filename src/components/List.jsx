/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import ListItems from '../components/ListItems';
import customFetch from '../utils/axios';

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [listMovies, setListMovies] = useState([]);
  const listRef = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await customFetch.get(`${list.fetchUrl}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
          },
        });
        setListMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [list.fetchUrl]);

  console.log(listMovies);

  const handleClick = direction => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 60;
    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${6 * 292 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${6 * -292 + distance}px)`;
    }

    console.log(distance);
  };
  return (
    <div className='list'>
      <span className='listTitle'>{list.title}</span>
      <div className='wrapper'>
        <ArrowBackIosNewOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className='container' ref={listRef}>
          {/* {list.content.map((item, index) => {
            return <ListItems key={index} index={index} item={item} />;
          })} */}
          {listMovies.results
            ? listMovies.results.map((item, index) => {
                return <ListItems key={index} index={index} item={item} />;
              })
            : ''}
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => {
            handleClick('right');
          }}
        />
      </div>
    </div>
  );
};

export default List;
