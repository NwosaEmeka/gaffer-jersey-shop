import React from 'react'
import Modal from 'react-modal'
import { CurrencyFormatter } from '../../Utils/CurrencyFormatter'

function ModalAction({product,closeModal,addToBasket}) {
  return (
    <div>
      <Modal
        isOpen={true}
        style={{ overlay: { zIndex: 50 } }}
        onRequestClose={closeModal}
        appElement ={document.getElementById('root')}
      >
        <div className="product__modal-container">
          <div className="product__modal-image">
            <img src={product.image} alt={product.title}/>
          </div>
          <div className="product__modal-info">
            <h3>PRODUCT DESCRIPTION</h3>
            <div className="product__text">
              <p className="product__desc">{product.description}</p>
              <p>Replica or Authentic: <span>Replica</span></p>
              <p>Club: <span>{product.club}</span></p>
              <p>Brand: <span>{product.Brand}</span></p>
            </div>
            <div className="product__price-info">
              <p>Price: <span>{CurrencyFormatter(product.price)}</span></p>
                <button
                  className="btn btn__pry"
                  onClick={() => {
                  addToBasket(product)
                  closeModal()
                  }}
                  >Add To Cart
                  </button>
            </div>
              </div>
            </div>
            <button onClick={closeModal} className="closeModal_btn">x</button>
      </Modal>
    </div>
  )
}

export default ModalAction
