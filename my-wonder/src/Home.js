import React, { useState, useEffect } from 'react'
import img1 from './img1.jpg'
import './Home.css'

const Home = () => {
    const [isFlipped, setIsFlipped] = useState(Array(5).fill(false));
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScroll(scrolled);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },);

    const handleCardFlip = (index) => {
        const newFlipped = [...isFlipped];
        newFlipped[index] = !newFlipped[index];
        setIsFlipped(newFlipped);
    };

    const cards = [
        {
            title: "Wildlife",
            backContent: "Observe the amazing diversity of cameroon savannah, with animals with amazing abilities"
        },

        {
            title: "Vegetation",
            backContent: "Observe the amazing diversity of cameroon savannah, with animals with amazing abilities"
        },

        {
            title: "Culture",
            backContent: "Observe the amazing diversity of cameroon savannah, with animals with amazing abilities"
        },

        {
            title: "People",
            backContent: "Observe the amazing diversity of cameroon savannah, with animals with amazing abilities"
        },
    ];

    return (
        <div className='travel-page'>
            <div className='scroll-progress-container'>
                <div className='scroll-progress-bar' style={{ width: `${scroll}%`}} />   
            </div>

            <nav className='navbar'>
            <div className='logo'>GK Trips</div>
            <div className='nav-links'>
                <a href="#home">Home</a>
                <a href="#trips">Trips</a>
                <a href="#hotels">Hotels</a>
                <a href="#myreservation">MY Reservation</a>

                <div className='auth-links'>
                    <a href='#signin'>Sign Up</a>|<a href='#register'>Create an Account</a>
                </div>
            </div>
            </nav>

            <section className='hero'>
                <div className='hero-content'>
                    <h1 className='slide-in-up'>Fall in love with<br/><span>Cameroon Beauty</span></h1>
                    <p className='slide-in-right'>Cameroon is a beautiful country full of amazing and incredible Mountains,
                        Hotels and Wildlife, you are going to witness it's incredible climate and also view the cultures 
                        and lives of their people lets visit
                    </p>
                </div>
            </section>

            <div className='image-grid'>
                {cards.map((card, index) => (
                <div
                key={index}
                className={`flip-card ${isFlipped[index] ?'flipped' : ''}`}
                onClick={() => handleCardFlip(index)}
                >

                    <div className='flip-card-inner'>
                        <div className='flip-card-front'>
                            <img src={img1 `card-${index+1}`}
                            alt={card.title} />
                        <p>{card.title}</p> 
                        </div>

                        <div className='flip-card-back'>
                            <h3>{card.title}</h3>
                            <p>{card.backContent}</p>
                            <button className='card-button'>Learn More</button>
                        </div>
                    </div>
                </div>    
                ))}
            </div>

            <footer className='footer'>
                <button className='explore-btn pulse-on-hover'>
                    EXPLORE CAMEROON
                </button>
            </footer>
        </div>
    );
};

export default Home