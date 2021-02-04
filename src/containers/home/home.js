import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Home/action'
import './home.scss'

import{
    bg
} from './../../asset'

const Home = (props) => {
    const { setHomeLoading } = props

    useEffect(() => {
        setHomeLoading()
        return () => {
            
        }
    }, [])

    const imgStyle={
        objectFit: 'cover',
        width: '100%',
        height: '100vh'
    }
    return(
        <div>
            <div className="container">
                <img src={bg} alt="Snow" style={imgStyle}/>
                <div className="centered">Website Under Breathtaking Construction</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    Home: state.Home
})
const mapDispatchToProps = {
    ...actions
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);