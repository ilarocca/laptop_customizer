import React, { Component } from 'react';
import FeaturesList from './FeaturesList'

export default class FeaturesForm extends Component {
    render() {
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeaturesList 
              features={this.props.features} 
              state={this.props.state} 
              handleUpdate={this.props.handleUpdate}
              USCurrencyFormat={this.props.USCurrencyFormat} />
          </form>
        )
    }
}
