import React, { Component } from 'react';

import AddBrand from './AddBrand';
import AddWood from './AddWood';
import DashboardLayout from '../../../hoc/DashboardLayout/DashboardLayout';




class ManageCateg extends Component {
 
    render() {
        return (
            <DashboardLayout>
                <div>
                    <AddBrand/>
                    <AddWood/>
                </div>
            </DashboardLayout>
        )
    }
}


export default ManageCateg;