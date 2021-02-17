import React, { Component } from 'react'
import formatCurreny from '../util'
import Fade from 'react-reveal/Fade'

export default class Products extends Component {
    render() {
        return (
            <div>
                <Fade bottom cascade>
                <ul className="products">
                    {this.props.products.map(product=>(
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}></img>
                                <p>
                                    {product.title}
                                </p>
                                </a>
                                  <div className="product-price">
                                      <div>
                                          {formatCurreny(product.price)}
                                      </div>
                                      <button onClick={() => this.props.addToCart(product)} className="button-primary">Add TO Cart</button>
                                  </div>
                            </div>

                        </li>
                    ))}
                </ul>
                </Fade>
            </div>
        )
    }
}
