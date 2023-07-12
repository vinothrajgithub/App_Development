import React from 'react';
import { Link } from 'react-router-dom';
function Home() {

    return ( <>
    <div className='card'>
        <div className='card-split'>
            <div className='card-row'>
                <img src='/joy.jpg' alt='Joyful ' height={ 50 } />
                <h1>Find more joy</h1>
                 <h3>Catch your breath, relax your mind, and feel 14% less stressed in just 10 days.</h3>
            </div>
            <div className='card-row'>
                <img src='/Night.jpg' alt='Sleep' height={ 50 } />
                <h1>Get more goodnights</h1>
                <h3>Put your mind to bed, wake up refreshed, and make good days your new normal.</h3>
            </div>
            <div className='card-row'>
                <img src='/Happy.jpg' alt='Happy' height={ 50 } />
                <h1>Make every day happier</h1>
                <h3> Do it for yourself, and everyone you love. It only takes a few minutes to find some happiness.</h3>
            </div>
            <div className='card-row' id='start'>
                <Link to="/login">
                    <button className='button'>Get Started</button>
                </Link>
            </div>
        </div>
        <div className='card-split'>
            <img src='main_image.jpg' alt='Main' height={ 500 } />
        </div>
    </div>
    </>
        
     );

}

export default Home;
