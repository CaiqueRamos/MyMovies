import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmbd'
import MovieRow from './components/movieRow';
import FeaturedMovie from './components/featuredMovie';
import Header from './components/header'
import Logo from "./components/MyMoviesLogo.png"

export default () =>{

  const [movieList, setMovieList] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
  
    const loadList = async () => {

      //pegando toda a lista
      let list = await Tmdb.getHomeList();
      setTimeout(() => {
        setMovieList(list);  
      }, 2000);
      

      //pegando o filme em destaque
      let originals = list.filter(i=>i.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeatured(chosenInfo)
    }

    loadList();
    
  }, [])

  return (
    <div className="page">

      <Header/>

      {featured && 
        <FeaturedMovie item={featured}/>
      }


      <section className="lists">
        {movieList.map((item, key)=>(
          
          <MovieRow key={key} title={item.title} items={item.items}/>

        ))}
      </section>
        
      <footer>
        Um modelo alternativo de site com base na netflix, <br/>utilizando 
        TMDB, Todos os direitos estão reservados aos mesmos.
      </footer>
      {movieList.length<=0 &&
        <div className="pre-loader">
          <img src={Logo} alt="Pre Loader" />
          <img src="https://www.blogson.com.br/wp-content/uploads/2017/10/lg.progress-bar-preloader.gif" alt="loading" />
        </div>
      }
    </div>
  )
}

