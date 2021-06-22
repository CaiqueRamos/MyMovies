import React from 'react'
import "./movieRow.css"
export default ({title, items}) => {
    return (
        <div className="MovieT">
            <div className="containerTitle">
                <h2>{title}</h2>
            </div>
            <div className="container">
                <div className="destaque">
                </div>
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div className="card" key={key}>
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    
                )) }
            </div>
        </div>
    )
}