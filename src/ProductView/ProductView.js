import React, { Component } from 'react';
import AddNavigation from '../Navigation/AddNavigation';
import './ProductView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';



class ProductView extends Component {
    constructor() {
        super()

        this.state = {
            product_name: '',
            product_price: '',
            id: '',
            button: 'Edit',
            bin: '',
            shelve: '',
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
        

        axios.get(`/api/Shelve/bin/${shelve2}${bin2}` ).then(res => {

            this.setState({

                product_name: res.data[0].product_name,
                product_price: res.data[0].product_price
                
            })
        })
    }

    updateName = (val) => {
        this.setState({product_name: val})
    }

    updatePrice = (val) => {
        this.setState({ product_price: val[0] === '$' ? val : '$' + val })
    }

    handleAtClick = () => {

        if (this.state.button === 'Edit') {
            this.handleEdit()
        } else {
            this.editProduct();
        }
    }

    handleEdit = () => {
        let inputs = document.getElementsByTagName('input');
        inputs[0].removeAttribute('readOnly');
        inputs[1].removeAttribute('readOnly');
        this.setState({button: 'Save'})
    }

    editProduct = () => {

        const { product_name, product_price, shelve, bin } = this.state;

        let {id} = this.props.match.params;


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

        axios.put(`/api/Shelf/saveToBin/${id}`, body)
        
        
        .then(response => {
            console.log(response);
            this.setState({button: 'Edit'})
            let inputs = document.getElementsByTagName('input');
            inputs[0].setAttribute('readOnly', true);
            inputs[1].setAttribute('readOnly', true);
            this.componentDidMount()
        }).catch(err => console.log(err));

    }

    handleDelete = () => {

        axios.put(`/api/Shelve/DeleteBin/${this.state.shelve}${this.state.bin}`).then(res => {
            this.setState({
                shelves: res.data
            })
        })

        alert('Item has been deleted')
    }

    
    render() {




        return (

            <div>
                <AddNavigation shelve={this.state.shelve} bin={this.state.bin}/> 


                <div>

                   
                        <div className='productImage'>
                            
                        </div>
                   

                    <h4>Name</h4>

                    <input
                        readOnly
                        type="text"
                        className='productName'
                        name='productName'
                        value={this.state.product_name}
                        onChange={(e) => this.updateName(e.target.value)}
                    />

                    <h4>Price</h4>

                    <input
                        readOnly
                        type="text"
                        className='productPrice'
                        name='productPrice'
                        value={this.state.product_price}
                        onChange={(e) => this.updatePrice(e.target.value)}

                    />

                </div>

                <div className='buttons'>

                    <button
                        onClick={this.handleAtClick} className={this.state.button}>

                        {this.state.button}

                    </button>
                    
                    <Link to={`/BinList/Shelve${this.state.shelve}`}>
                    
                    <button
                        onClick={() => this.handleDelete()}
                        className='deleteBtn'
                        >

                        Delete
                        
                        </button></Link>

                </div>


            </div>

        )
    }
}

export default ProductView;