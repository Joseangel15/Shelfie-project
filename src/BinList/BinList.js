import React, {Component} from 'react';
import ShelveNavigation from '../Navigation/ShelveNavigation';
import axios from 'axios';
import './BinList.css';
import {Link} from 'react-router-dom';

class BinList extends Component {
    constructor(){
        super()

        this.state = {
            bins: [],
            shelve: '',
        }
    }
    
    
    componentDidMount = () => {
        
        var urlParam = this.props.match.params.id
        var shelve1
        
        if(urlParam === 'ShelveA') {
             shelve1 = 'A'
        } else if (urlParam === 'ShelveB') {
             shelve1 ='B'
        } else if (urlParam === 'ShelveC') {
             shelve1 = 'C'
        } else if (urlParam === 'ShelveD') {
             shelve1 = 'D'
        } else {
            return
        }

        axios.get(`/api/Shelve/Bins/${shelve1}`).then(res => {
            this.setState({
                
                bins: res.data,
                shelve: res.data[0].shelve,
                
                
            })
        })
    }


    render(){

        const newBin = this.state.bins.map(el => {
            
                        
            if(`${el.product_name}` === 'null'){

                return (
                    
                <div>

                    <Link to={`/AddItem/${el.shelve}${el.bin}`}>
                    
                    <button 
                        className='addBtn'>
                        
                        + Add Inventory
                        
                        </button></Link>

                </div>
                    
                )
                            
            } else {
                return (

                <div>

                    <Link to={`/ProductView/${el.shelve}${el.bin}`}>
                    
                    <button 
                        className='binBtn'>
                        
                        Bin {el.bin}
                        
                        </button>
                        </Link>

                </div>
                        
                )}

            
        } )


        return(

            <div>
                <ShelveNavigation  shelve={this.state.shelve}/>

                <div className='allBins'>

                    {newBin}
                    
                </div>


            </div>

        )
    }
}

export default BinList;