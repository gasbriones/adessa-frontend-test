import React from 'react';
import ItemList from './ItemList';
import ItemsAdded from './ItemsAdded';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemsAdded: [],
      totalAmount: 0
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/items')
      .then(response => response.json())
      .then(items => {
        this.setState({
          items: items.catalog
        })
      }).catch(error => console.log('Error:', error));
  }

  getItemById = (id) => {
    return this.state.items.filter((obj) => {
      return obj.id === id;
    });
  };

  _addToCart = (id) => {

    let item = this.getItemById(id);

    this.setState((prevState) => ({
      itemsAdded: prevState.itemsAdded.concat(item),
      totalAmount: parseInt(prevState.totalAmount) + parseInt(item.map(x => x.price))
    }));

  };

  _removeToCart = (id) => {
    let item = this.getItemById(id);

    this.setState((prevState) => ({
      itemsAdded: prevState.itemsAdded.filter(obj => {
        return obj.id !== id;
      }),
      totalAmount: parseInt(prevState.totalAmount) - parseInt(item.map(x => x.price))
    }));
  };

  render() {
    return (
      <div className="col-10 grid">
        <ItemsAdded itemsAdded={this.state.itemsAdded} removeToCart={this._removeToCart}
                    totalAmount={this.state.totalAmount}/>
        <ItemList items={this.state.items} addToCart={this._addToCart}/>
      </div>
    )
  }
}


