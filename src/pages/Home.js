import React from 'react';
import './Home.css';
import { Link } from "react-router-dom"
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import Search from '../components/Search.js'
import logo from '../ttds-logo-removebg-preview.png';

function Home() {
    return(
        // style={{ backgroundImage: `url(${image})` }}
        <div className="home" >

            <div className='home__body'>
                <img src= {logo} alt=""/>
                <div className="home__inputContainer">
                    {/* <Search hideButtons/> */}
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home