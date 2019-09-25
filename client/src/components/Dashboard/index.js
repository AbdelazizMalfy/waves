import React from 'react';

import MyButton from '../utils/MyButton'
import DashboardLayout from '../../hoc/DashboardLayout/DashboardLayout';

import HistoryBlock from '../utils/HistoryBlock';

const Dashboard = ({user}) => {
    return (
        <DashboardLayout>
            <div>
                <div className='user_nfo_panel' >
                    <h1 >User information</h1>
                    <div>
                        <span>name: {user.userData.name}</span>
                        <span>lastname: {user.userData.lastname}</span>
                        <span>email: {user.userData.email}</span>
                    </div>
                    <MyButton 
                        type="default"
                        title= "Edit account info"
                        linkTo="/user/user_profile"
                    />
                </div>

                { 
                    user.userData.history ? 
                    <div className='user_nfo_panel' >
                        <h1 >History purchases</h1>
                        <div className='user_product_block_wrapper'>
                            <HistoryBlock
                                productsHistory={user.userData.history}
                            />
                        </div>
                    </div>
                    :null
                }
            </div>
        </DashboardLayout>
    )
}

export default Dashboard
