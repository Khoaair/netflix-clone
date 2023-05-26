/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import List from '../components/List';
import { listsMovies } from '../utils/constant';

const Home = ({ type }) => {
  return (
    <div className='bg-main overflow-hidden relative'>
      <Navbar />
      <Featured type={type} />
      {listsMovies.map(list => {
        return <List key={list.id} list={list} />;
      })}
    </div>
  );
};

export default Home;
