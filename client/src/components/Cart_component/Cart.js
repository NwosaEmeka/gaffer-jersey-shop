import React, {useState, useEffect} from 'react';
import {CurrencyFormatter} from '../../Utils/CurrencyFormatter'
import { Link } from "react-router-dom";
import { useStoreValue } from '../../contextApi/StateProvider';
import { getTotal, itemCount } from '../../contextApi/reducer';
import Payment from '../Payment/Payment';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './cart.css';


function Cart() {
  useEffect(() => {
    AOS.init({
      duration: 400
    });
    AOS.refresh(); 
  }, [])

  const [{ basket,user }, dispatch] = useStoreValue();

  const increaseItemQuantity = (item) => {
    dispatch({
      type: 'INCREASE_ITEM_QUANTITY',
      payload: item
    })
  }
  const decreaseItemQuantity = (item) => {
    dispatch({
      type: 'DECREASE_ITEM_QUANTITY',
      payload: item
    })
  }

  const removeItem = (item) => {
    dispatch({
      type: 'REMOVE_ITEM_FROM_BASKET',
      payload: item
    })
  }
  return (
    <div className="items__wrapper">
      <p className="cart__header">Hi, {user?.displayName}{" "}
        {basket?.length > 0 ?
          `You have ${itemCount(basket)} item(s) in basket`
          :
          'Your basket is empty'
        }
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="unit__price-data">Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            basket?.map((item) => item.quantity > 0 ?
              <tr key={item._id} data-aos="fade-right" data-aos-once="true">
                <td className="item__detail">
                  <img src={item.image} alt={item.title} />
                  <p>{item.description}</p>
                </td>
                <td className="quantity-data">
                  <button className="count__btn" onClick = {() => decreaseItemQuantity(item)}>-</button>
                  <span className="item__count">{item.quantity}</span>
                  <button className="count__btn" onClick = {() => increaseItemQuantity(item)} >+</button>
                  <button className="remove__btn" onClick = {()=> removeItem(item)} >x</button>
                </td>
                <td className="unit__price-data">
                  <p className="item__price">{CurrencyFormatter(item.price)}</p>
                </td>
                <td className="total__price-data">
                  <p className="item__price">{CurrencyFormatter(item.price *item.quantity)}</p>
                </td>
              </tr>
              : null
            )
          }
        </tbody>
      </table>
      
        <div>
            <div className="final_price">
              <p>Total: </p>
              <p>{CurrencyFormatter(getTotal(basket))}</p>
          </div>
          <div className="ctc__btn">
            <Link to ="/">
              <button className="btn btn__pry">Continue Shoppping</button>
            </Link>
          
            {basket?.length > 0 && (
              <div>
                {user? null:<p className="guest__checkout">Continue as a Guest or <Link className="guest__link" to='signin'>Login</Link></p>}
                <Payment total={getTotal(basket)} />
                <p className="test">Please use 4242-4242-4242-4242 as card number</p>
              </div> 
            )}
          </div>   
        </div>
      
    </div>
  )
}

export default Cart
