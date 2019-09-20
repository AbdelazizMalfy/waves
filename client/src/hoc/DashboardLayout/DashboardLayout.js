import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

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
                    {
                        props.user.userData.isAdmin ?
                        (<div> 
                            <h2>Admin</h2>
                            <div className='links'>
                                <Link to='/admin/site_info'>Site Info</Link>
                            </div> 
                            <div className='links'>
                                <Link to='/admin/add_product'>Add products</Link>
                            </div>    
                            <div className='links'>
                                <Link to='/admin/manage_categories'>Manage Categories</Link>
                            </div> 
                        </div> )
                        : null
                    }
                </div>   
                <div className='user_right'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user : state.user
})

export default connect(mapStateToProps)(DashboardLayout);
