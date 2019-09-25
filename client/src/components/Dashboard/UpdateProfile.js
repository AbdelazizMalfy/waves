import React from 'react';
import DashboardLayout from '../../hoc/DashboardLayout/DashboardLayout';
import UpdatePersonalInfo from './UpdatePersonalInfo'

const UpdateProfile = () => {
    return (
        <DashboardLayout>
                <h1>Profile</h1>
                <UpdatePersonalInfo/>
        </DashboardLayout>
    )
}

export default UpdateProfile
