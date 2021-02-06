import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Home/action'
import './home.scss'
import HomeList from '../../components/weboosh-core/homeList'

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
                <HomeList/>
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