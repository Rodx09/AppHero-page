import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from "react"
import { useEffect } from "react"
import Swal from 'sweetalert2'
import '../css/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export const Header = () => {


  return (
    <>
<nav>
  <div className="wrapper">
    <div className="logo"><a href="/AppHero-page/build"><i title='Ir a inicio' className="bi bi-house-fill"></i> Marvel Comics</a></div>
    <input type="radio" name="slider" id="menu-btn" />
    <input type="radio" name="slider" id="close-btn" />
    <ul className="nav-links">
      <label htmlFor="close-btn" className="btn close-btn"><i className="fas fa-times" /></label>

    </ul>
    <label htmlFor="menu-btn" className="btn menu-btn"><i className="fas fa-bars" /></label>
  </div>
</nav>


    </>
  )
}
