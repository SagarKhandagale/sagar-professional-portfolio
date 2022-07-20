import React from "react"
import logo1 from "./pic/logo.ico"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2022. All rights reserved by Sagar Khandagale</p>
        </div>
      </footer>
    </>
  )
}

export default Footer