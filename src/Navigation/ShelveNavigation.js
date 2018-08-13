import React from 'react';
import './ShelveNavigation.css';
import {Link} from 'react-router-dom';

function ShelveNavigation (props) {



    
        return (

            <div>

                <div className='logoBar'>

                    <Link to='/'><div className='logoDiv'>
                    </div></Link>

                        <div className='shelfLetter'>
                            <h4 className='titleShelf'>SHELF {props.shelve}</h4>
                        </div>

                    <div className='shelfie'></div>


                </div>

            </div>
        )
    
}

export default ShelveNavigation;