import React from 'react'
import './header.css'
import Logo from "./MyMoviesLogo.png"

export default () =>{
    return(
        <header>
            <div className="header--logo">
                <img src={Logo} alt="Minha logo" />
            </div>
            <div className="header--user">
                <figure>
                    <img src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png" alt="Minha user" />
                </figure>
            </div>
        </header>
    )
}