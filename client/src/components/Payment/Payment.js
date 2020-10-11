import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {CurrencyFormatter} from '../../Utils/CurrencyFormatter'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useStoreValue } from '../../contextApi/StateProvider'
import { addToOrders } from '../Order_component/AddToOrder'


function Payment({ total }) {
  const totalPrice = total * 100 //stripe only accept cents
  const publicKey = 'pk_test_51HaM5NGKSWUdqQNS3Dull99FPGtYe2q5SJ0iLhScOra3e3z7VVY3NjBazpU93W7iuq9dpABLR1eKXM8sXMSUkTXJ00Tb36WVIT'

  const [{ basket, user }, dispatch] = useStoreValue();
  const history = useHistory()

  const onToken = async (token) => {
    try {
      const {data} = await axios.post('/payment', {amount: totalPrice, token})
      await addToOrders(data.success, total, user, basket)
      dispatch({
        type: "CLEAR_BASKET"
      })
      alert("Thank You, your order has been placed")
      history.replace('/orders')
    }
    catch (error) {
      console.log(error)
      alert("Payment decline, please make sure you are using 4242 4242 4242 4242 as card type and any future date")
    }
  }
  return (
    <StripeCheckout 
      label="SECURE CHECKOUT"
      name="Gaffer Jersey Sdn Bhd"
      billingAddress
      shippingAddress
      allowRememberMe
      amount={totalPrice}
      locale='en'
      alipay
      bitcoin
      description={`Amount due is ${CurrencyFormatter(total)}`}
      token={onToken}
      panelLabel="SECURE CHECKOUT"
      stripeKey={publicKey}
    />
  )
}

export default Payment
