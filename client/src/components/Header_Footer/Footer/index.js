import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass'
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone'
import faClock from '@fortawesome/fontawesome-free-solid/faClock'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'


import { connect } from 'react-redux';
import { getSiteInfo } from '../../../actions/site_actions';



class Footer extends Component {

    componentDidMount(){
        if(Object.keys(this.props.site).length === 0){
            this.props.dispatch(getSiteInfo());
        }
    }

    render(){
        const { siteInfo } = this.props.site;
        return (
            siteInfo ?
            <footer className='bck_b_dark'>
                <div className='container'>
                    <div className='logo'>
                        <Link to='/'>Waves</Link>
                    </div>
                    <div className='wrapper'>
                        <div className='left'>
                            <h2>Contact information</h2>
                            <div className='business_nfo'>
                                <div className='tag'>
                                    <FontAwesomeIcon
                                        icon={faCompass}
                                        className='icon'
                                    />
                                    <div className='nfo'>
                                        <div>Address</div>
                                        {
                                            siteInfo[0] ?
                                            <div>{siteInfo[0].address}</div>
                                            :null
                                        }
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className='icon'
                                    />
                                    <div className='nfo'>
                                        <div>Phone</div>
                                        {
                                            siteInfo[0] ?
                                            <div>{siteInfo[0].phone}</div>
                                            :null
                                        }
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className='icon'
                                    />
                                    <div className='nfo'>
                                        <div>Working hours</div>
                                        {
                                            siteInfo[0] ?
                                            <div>{siteInfo[0].hours}</div>
                                            :null
                                        }
                                    </div>
                                </div>
                                <div className='tag'>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className='icon'
                                    />
                                    <div className='nfo'>
                                        <div>Email</div>
                                        {
                                            siteInfo[0] ?
                                            <div>{siteInfo[0].email}</div>
                                            :null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right'>
                            <h2>Be the first to know</h2>
                            <div>
                                <p>Get all the latest information on events, sales and offers. You can miss out.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            : null
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

export default connect(mapStateToProps)(Footer);
