import React, { Component } from 'react';
import AddNavigation from '../Navigation/AddNavigation';
import './AddItem.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddItem extends Component {
    constructor(){
        super()


        this.state = {
            product_name: '',
            product_price: '$' + '',
            bins: [],
            shelve: '',
            bin: '',
        }
    }

    componentDidMount = () => {
        var UrlParams2 = this.props.match.params.id;
        var separate = UrlParams2.split("");

        var shelve2 = separate[0];
        var bin2 = separate[1];

        this.setState({
            shelve: shelve2,
            bin: bin2
        })

        
    }


    updateName = (val) => {
        this.setState({product_name: val})
        console.log(this.state.product_name);
        
    }

    updatePrice = (val) => {
        this.setState({product_price: val})
        console.log(val);
        
    }

    handleAddInventory = () => {

        const { product_name, product_price, shelve, bin } = this.state;
        let {id} = this.props.match.params;

        if(!product_name || !product_price) {
            return alert('Please add an item') 
        };

        this.setState({

            product_name: '',
            product_price: '',

        })

        let body = {

            product_name: product_name,
            product_price: product_price,
            shelve: shelve,
            bin: bin

        }

        console.log(this.state.product_name)
        console.log(this.state.product_price)

        console.log(body);
        

        axios.put(`/api/Shelf/saveToBin/${id}`, body).then(res => {

            
            alert('Item has been added')
        })
        
    }



    render() {
        return (
            <div>
                <AddNavigation shelve={this.state.shelve} bin={this.state.bin}/>
                <div>

                    <h4>Name</h4>

                    <input
                        type="text"
                        className='productName'
                        onChange={(e) => this.updateName(e.target.value)}
                        name='productName'
                        value={this.state.product_name}
                         />

                    <h4>Price</h4>

                    <input
                        type="text"
                        className='productPrice'
                        onChange={(e) => this.updatePrice(e.target.value)}
                        name='productPrice'
                        value={this.state.product_price}
                        />

                </div>

                <div>
                    <Link to={`/BinList/Shelve${this.state.shelve}`}><button 
                        className='inventoryBtn'
                        onClick={this.handleAddInventory}>
                        
                        + Add Inventory
                    
                    </button></Link>
                </div>

            </div>
        )
    }
}


export default AddItem;