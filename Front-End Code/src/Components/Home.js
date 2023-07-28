import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Home() {
    const Username = useSelector((state)=>state.name);

    return ( 

     <>
     <h2>WELCOME,{Username}! START YOUR TRACKING</h2>
    <div className='card'>
        <div className='card-split'>
            <div className='card-row'>
                <img src='/joy.jpg' alt=' Joyful ' height={ 50 } />
                <h1>Find more joy</h1>
                 <h3>Catch your breath, relax your mind, and feel 14% less stressed in just 10 days.</h3>
            </div>
            <div className='card-row'>
                <img src='/Night.jpg' alt=' Sleep ' height={ 50 } />
                <h1>Get more goodnights</h1>
                <h3>Put your mind to bed, wake up refreshed, and make good days your new normal.</h3>
            </div>
            <div className='card-row'>
                <img src='/Happy.jpg' alt='Happy' height={ 50 } />
                <h1>Make every day happier</h1>
                <h3> Do it for yourself, and everyone you love. It only takes a few minutes to find some happiness.</h3>
            </div>
            <div className='card-row' id='start'>
                <Link to="/register">
                    <button className='button'>Get Started</button>
                </Link>
            </div>
        </div>
        <div className='card-split'>
            <img src='main_image.jpg' alt='Main' height={ 500 } />
        </div>
    </div>
     <div className='card'>
        <div className='card1'>
        <img src='/Running.jpg' height={ 300 } />
        <h1>SPRINT</h1>
        </div>
        <br/>
        <div className='card1'>
         <img src='/calm.jpg' height={ 300 } />
         <h1>REST</h1>
        </div>
        <br/>
        <div className='card1'>
            <img src='/reasses.jpg' height={ 300 } />
            <h1>REASSESS </h1>
        </div>
       </div>
    </>
        
     );

}















