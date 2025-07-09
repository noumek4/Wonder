import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
            <nav className='navbar'>
                <div className='logo'>Explore</div>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Hotels</li>
                    <li>Trips</li>
                    <li>My Reservation</li>   
                </ul>

                <div className='auth-links'>
                  <Link to="/register" >Create an Account</Link>
                  <Link to="/signin" >Sign Up</Link>  
                </div>
            </nav>

            <div className='content'>
                <div className='left-side'>
                    <img src='/' alt='palace' />
                </div>

                <div className='right-side'>
                    <h3 className='subtitle'>Fall in love with</h3>
                    <h1 className='title'>The Waza Park</h1>
                    <p className='description'>
                        The Waza Park also known as one of Cameroon wildlife reserve,
                        will show you the wonders of from cameroon savannah.

                        Based in the northern part of our country prepare yourselves
                        to be amazed by a lot of beauty from both animals and vegetation

                        You shall discover the North never as before, Are you ready
                        for the great adventure
                    </p>

                    <div className='card-list'>
                     <div className='card'>
                        <img src='/' alt='waza'/>
                        <p>Wildlife</p>
                     </div>

                     <div className='card'>
                       <img src='/' alt='waza'/>
                       <p>Vegetation</p> 
                     </div>

                     <div className='card'>
                       <img src='/' alt='waza'/>
                       <p>Vegetation</p> 
                     </div>
                    </div>

                    <button className='explore-btn'>Explore the Waza Park</button>
                </div>
            </div>
        </>
    )
}

export default Home