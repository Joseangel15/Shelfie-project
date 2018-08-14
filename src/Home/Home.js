import React, { Component } from 'react';
import MainNavigation from '../Navigation/MainNavigation';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
    

    render() {

        
        return (
            <div>
                <MainNavigation />

                <div>
                    <div className='shelves'>

                        <div className='shelveA'>

                            <Link to='/BinList/ShelveA'><button
                                className='BtnA'
                            >

                                Shelf A</button></Link>

                        </div>

                        <div className='shelveB'>

                            <Link to='/BinList/ShelveB'><button
                                className='BtnB'
                            >

                                shelve B</button></Link>

                        </div>

                        <div className='shelveC'>

                            <Link to='/BinList/ShelveC'><button
                                className='BtnC'
                            >

                                shelve C</button></Link>

                        </div>

                        <div className='shelveD'>

                            <Link to='/BinList/ShelveD'><button
                                className='BtnD'
                            >

                                shelve D</button></Link>

                        </div>
                    </div>

                </div>
        </div>
                )
            }
        }
        
        export default Home;
        
