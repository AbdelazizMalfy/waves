import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { AuthUser } from '../../actions/user_actions';

export default function(InnerComponent,privateRoute,adminRoute = null) {
    class AuthenticationCheck extends Component {

        state = {
            loading : true
        }

        componentDidMount(){
            this.props.dispatch(AuthUser())
            .then(response => {
                let user = this.props.user.userData;
                console.log(user)

                if(!user.isAuth){
                    if(privateRoute){
                        this.props.history.push('/register_login')
                    }
                }else {
                    if(adminRoute && !user.isAdmin){
                        this.props.history.push('/user/dashboard')
                    }else {
                        if(privateRoute === false){
                            this.props.history.push('/user/dashboard')
                        }
                    }
                }


                this.setState({loading:false})
            })
        }
    
    


        render() {
            if (this.state.loading) {
                return (
                    <div className='main_loader'>
                        <CircularProgress style={{color:'blue'}} thickness={4} />
                    </div>
                )
            }else {
                return (
                    <div>
                        <InnerComponent {...this.props} user={this.props.user} />
                    </div>
                )
            }
        }
    }
    const mapStateToProps = state => ({
        user:state.user
    })

    return connect(mapStateToProps)(AuthenticationCheck);
}


