import React,{useEffect, useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { CurrencyFormatter } from '../../Utils/CurrencyFormatter'
import './products.css'
import { useStoreValue } from '../../contextApi/StateProvider'
import ModalAction from './ModalAction'

function Products({ products }) {

  const [currentProduct, setCurrentProduct] = useState(null);
  const [_,dispatch] = useStoreValue()
  function openModal(product) {
    setCurrentProduct(product);
  }
  function closeModal() {
    setCurrentProduct(null);
  }
 
  function addToBasket(product) {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product
    })
  }
  useEffect(() => {
    AOS.init({
      duration: 400
    });
    AOS.refresh(); 
  },[])
  return (
    <div>
      <ul className="products__list">
        {products.map(product => 
          <li key={product._id} className="product__list-item" data-aos="fade-up" data-aos-once="true">
            <div className="product">
              <div className="product__container">
                <a href={"#" + product._id} onClick={() => openModal(product)} >
                  <div className="product__image">
                    <img src={product.image} alt={product.title} loading ="lazy"/>
                  </div>
                  <p className="product__title">
                    {product.title}
                  </p>
                </a>
              </div>
              <div className="price__container">
                <p className="price">
                  {CurrencyFormatter(product.price)}
                </p>
                <button className="btn btn__pry" onClick = {() => addToBasket(product)}>Add To Cart</button>
              </div>
            </div>
          </li>
          )}
      </ul>
      {currentProduct && 
        <ModalAction
        product={currentProduct}
        closeModal={closeModal}
        addToBasket={addToBasket}
       />
      }
    </div>
  )
}

export default Products
