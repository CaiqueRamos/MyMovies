import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmbd'
import MovieRow from './components/movieRow';

export default () =>{

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
  
    const loadList = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
  
    loadList();
    
  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key)=>(
          
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
    </div>
  )
}