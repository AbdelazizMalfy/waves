import React from 'react';
import MyButton from '../utils/MyButton';
import Login from './Login';


const RegisterLogin = () => {
    return (
        <div className='page_wrapper'>
            <div className='container'>
                <div className='register_login_container'>
                    <div className='left'>
                        <h1>New User</h1>
                        <p>if you are new here you should sign up as soon as possible and enjoy our extraordinary services.</p>
                        <MyButton 
                        title='CREATE NEW ACCOUNT'
                        linkTo='/register'
                        type='default'
                        addStyles= {{
                            margin:'10px 0 0 0'
                        }}
                        />
                    </div>

                    <div className='right'>
                        <h2>Registed customer</h2>
                        <p>if you have an account please log in.</p>
                        <Login/>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default RegisterLogin;
