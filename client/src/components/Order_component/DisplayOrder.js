import React,{useEffect} from 'react'
import { CurrencyFormatter } from '../../Utils/CurrencyFormatter'
import moment from 'moment'
import AOS from 'aos'
import 'aos/dist/aos.css'

function DisplayOrder({ order }) {
  
  useEffect(() => {
    AOS.init({
      duration: 400
    });
    AOS.refresh(); 
  }, [])
  
  return (
    <div className="orders__card" data-aos="fade-up">
      <div className="order__info">
        <p className="order__id">Order: <span className="order__id-color">{order.id}</span></p>
      <small className="order__date">Placed on {moment.unix(order.data.created).format("MMM Do YYYY, h:mm:ss:a")}</small>
      </div>
      <div className="order__details">
        {order.data.basket?.map(item => <div key={item._id} className="item__detail">
          <div className="item__image">
            <img src={item.image} alt={item.title} />
            <div className="item__desc">{item.description}</div>
          </div>
          <div className="price">{CurrencyFormatter(item.price)}</div>
          <div className="item__qty">Qty: {item.quantity}</div>
          <div className="status">Delivered</div>
        </div>)}
        <div className="order__total">
          {order.data.basket?.length} items, Total: <span className="total__color">{CurrencyFormatter(order.data.amount)}</span>
        </div>
      </div>
      
    </div>
  )
}

export default DisplayOrder
