import React from 'react'
import "./header.scss"
import Logo from "../img/logo.png"

export const Header = () => {
    return (
        <div className='header'>
            <h1>
                <img src={Logo} alt="" />
                <span>NOTES</span>
            </h1>

        </div>
    )
}
