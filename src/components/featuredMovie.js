import React from "react";
import "./featuredMovie.css"

export default ({item}) => {

    let genres = [];

    for (const i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return(
        
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `URL(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                {console.log(item)}
                    {/* <div className="featured--logo" style={{ 
                        backgroundImage: `./MyMoviesLogo.png`}}> 
                    </div> */}

                    <div className="featured--originalName"> 
                        <h1>{item.original_name}</h1>
                    </div>
                    
                    <div className="featured--info">
                        <span>{item.vote_average}</span>
                        <span>{item.original_language.toUpperCase()}</span>
                        <div className="featured--overview">
                            <p>{item.overview}</p>
                        </div>
                        <div className="featured--buttons">
                            <button className="assistir">Assistir</button>
                            <button>+ Minha Lista</button>
                        </div>
                        <span>Gênero: {genres.join((', '))}</span>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

// original_language 
// overview
// tagline
// episode_run_time
// last_episode_to_air.name vote_average

