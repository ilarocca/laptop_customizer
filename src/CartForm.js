import React, { Component } from 'react';
import CartList from './CartList'
import CartTotal from './CartTotal';

export default class CartSummary extends Component { 
    render() {
        
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            <CartList
            state={this.props.state} 
            USCurrencyFormat={this.props.USCurrencyFormat} />
            <CartTotal 
            state={this.props.state} 
            USCurrencyFormat={this.props.USCurrencyFormat} 
            />
          </section>
        )
    }
}