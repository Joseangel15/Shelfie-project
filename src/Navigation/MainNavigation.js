import React, { Component } from 'react';
import './MainNavigation.css';
import {Link} from 'react-router-dom';

class MainNavigation extends Component {



    render() {
        return (

            <div>

                <div className='logoBar'>

                    <Link to='/'><div className='logoDiv'>
                    </div></Link>

                    <div className='shelfie'>SHELFIE</div>


                </div>

            </div>
        )
    }
}

export default MainNavigation;