import React from 'react';
import './AddNavigation.css';
import {Link} from 'react-router-dom';

function AddNavigation(props) {



    
        return (

            <div>

                <div className='logoBar'>

                    <Link to='/'><div className='logoDiv'>
                    </div></Link>

                        <Link to={`/BinList/Shelve${props.shelve}`}><div 
                        className='shelfLetterNew'>

                            <h4 className='titleShelf'>SHELF {props.shelve}</h4>
                            
                        </div></Link>

                        <div className='shelfLetterNew2'>
                            <h4 className='titleShelf'>BIN {props.bin}</h4>
                        </div>

                    <div className='shelfie'></div>


                </div>

            </div>
        )
    
}

export default AddNavigation;