import React from 'react';
import userService from '../services/UserService';

const LandingPage = () => {
    return ( <div>
        Landing Page
        
        <ul>
            <li><a href="/resturant"> Resturants</a></li>
            <li><a href="/resturant/signup"> Resturants Signup</a></li>
        </ul>
    </div> );
}
 
export default LandingPage;