import React from 'react'
import "./footer.scss"

export const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <div>
    <footer>
        <p>Copyright © {year} </p>
    </footer>
    </div>
  )
}
