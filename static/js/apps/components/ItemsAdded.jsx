import React from 'react';
export default class ItemAdded extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.itemsAdded;
    return (
      <div className="item-added col-12 grid-center">
        <div className="col-12  grid-center">
          <span className="col-3 amount">Total: {this.props.totalAmount}</span>
        </div>
        {items.length > 0 ? (<ul className="item-list col-8 grid-center">
          {
            items.map((item, index) => {
              return <li className="item col" key={index}>
                <div className="item-box">
                  <img src={item.imageURL}/>
                  <h3>{item.name}</h3>
                  <div>{item.currency} {item.price}</div>
                  <button onClick={event => this.props.removeToCart(item.id)}>Remove to cart</button>
                </div>
              </li>
            })
          }
        </ul>) : (
          <div className="loading col-12">No se agrego ningun item</div>
        )}
    </div>)
  }
}
