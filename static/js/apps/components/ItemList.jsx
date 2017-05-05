import React from 'react';

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items;
    return <div className="item-list-wrapper col-12 grid-center">
      <h1 className="col-8">Product List</h1>
      {items.length > 0 ? (<ul className="item-list col-8 grid-spaceBetween">
        {
          items.map((item, index) => {
            return <li className="item col" key={index}>
              <div className="item-box">
                <img src={item.imageURL}/>
                <h3>{item.name}</h3>
                <div>{item.currency} {item.price}</div>
                <button onClick={event => this.props.addToCart(item.id)}>Add to cart</button>
              </div>
            </li>
          })
        }
      </ul>) : (
        <div className="loading col-12">Cargando lista ...</div>
      )}
    </div>
  }
}
