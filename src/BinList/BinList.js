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
        console.log(this.props.match.params.id)
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
        console.log(shelve1)

        axios.get(`/api/Shelve/Bins/${shelve1}`).then(res => {
            this.setState({
                
                bins: res.data,
                shelve: res.data[0].shelve,
                
                
            })
        })
        console.log(this.state.bins)
    }


    render(){

        const newBin = this.state.bins.map(el => {
            
                        
            console.log(el.product_name)
            if(`${el.product_name}` === 'null'){

                return (
                
                    <Link to={`/AddItem/${el.shelve}${el.bin}`}><button className='addBtn'>+ Add Inventory</button></Link>
                )
                            
            } else {
                return (

                    <Link to={`/ProductView/${el.shelve}${el.bin}`}><button className='binBtn'>Bin {el.bin}</button></Link>
                    
                        
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