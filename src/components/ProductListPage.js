import React, { Component } from 'react';
import './ProductListPage.css'
import Api from '../helpers/api';
import { FaRupeeSign } from "react-icons/fa"

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount() {
    const result = await Api().get('/v1/product?include=images,variants.images,details&client_id=16&client_secret=2940817743989db01f17da185025b0d0ade26778652&page=1')
    await this.setState({data: result.data})
    console.log(this.state.data)
  }
  async buttonClicked(event) {
    await this.props.history.push(`/${event}`)
  }
  render(){
    return(
      <div>
        <div className="nav">
            <button onClick={()=>this.buttonClicked('register')}>REGISTER</button>
            <button onClick={()=>this.buttonClicked('login')}>LOGIN</button>
          </div>
          <div className="container">
          <h1 className="header">PRODUCTS</h1>
          <h2 className="header">Decorations - Chrismas Decorations</h2>
          <div className="product-list-container">
            { this.state.data.length &&
              this.state.data.map((product,index)=>{
                return(
                  <div key={index} className="product-container">
                    {
                      product.images.data.length 
                      ? <img src={product.images.data[0].s} width='200px' height='150px'/> 
                      : <img  width='200px' height='150px'/> 
                    }
                    <div className="product-list-content">
                      <div className="product-name">{product.product_name}</div>
                      <div className="product-brand-name">{product.details.data.brand_name}</div>
                      { (product.variants.data[0].discount == 0 )
                      ? <div className="product-price"><FaRupeeSign size="10px"/>{product.variants.data[0].price}</div>
                      : <div className="product-price">
                          {/* <div></div> */}
                          <span className="discount"><FaRupeeSign size="10px"/>{product.variants.data[0].price}</span>
                          {product.variants.data[0].actual_price}
                        </div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}