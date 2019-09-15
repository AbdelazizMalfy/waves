import React from 'react';
import { Link } from 'react-router-dom'

const DashboardLayout = (props) => {
    return (
        <div className='container'>
            <div className='user_container'>
                <div className='user_left_nav'>
                    <h2>My account</h2>
                    <div className='links'>
                        <Link to='/user/dashboard'>My account</Link>
                    </div> 
                    <div className='links'>
                        <Link to='/user/user_profile'>User information</Link>
                    </div>    
                    <div className='links'>
                        <Link to='/user/cart'>My Cart</Link>
                    </div>
                </div>   
                <div className='user_right'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;
