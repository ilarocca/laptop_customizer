import React, { Component } from 'react';
import { render } from 'react-dom';

export default class CartList extends Component {
  render() {
    const USCurrencyFormat = this.props.USCurrencyFormat;
    const summary = Object.keys(this.props.state.selected).map(
      (feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.state.selected[feature];

        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      }
    );
    return <div>{summary}</div>;
  }
}
