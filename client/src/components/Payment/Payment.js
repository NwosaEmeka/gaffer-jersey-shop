import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {CurrencyFormatter} from '../../Utils/CurrencyFormatter'
import axios from 'axios'
import { useStoreValue } from '../../contextApi/StateProvider'


function Payment({ total }) {
  const totalPrice = total * 100 //stripe only accept cents
  const publicKey = 'pk_test_51HaM5NGKSWUdqQNS3Dull99FPGtYe2q5SJ0iLhScOra3e3z7VVY3NjBazpU93W7iuq9dpABLR1eKXM8sXMSUkTXJ00Tb36WVIT'

  const [{ basket,user }, dispatch] = useStoreValue()
  const onToken = (token) => {
    console.log(token)
    axios.post('/payment',{
      amount: totalPrice,
      token
    })
      .then(res => {
        alert("Your payment was sucesssfull")
        dispatch({
          type:"CLEAR_BASKET"
        })
        history.replace('/orders')
      })
      .catch(err => {
        console.log("payment error: ", JSON.parse(err))
        alert("There is issue with your cedit card, please use 4242-4242-4242-4242 as card number any future date and 123 as cvv")
    })
  }
  return (
    <StripeCheckout 
      label="SECURE CHECKOUT"
      name="Gaffer Jersey Sdn Bhd"
      billingAddress
      shippingAddress
      allowRememberMe
      amount={totalPrice}
      description={`Amount due is ${CurrencyFormatter(total)}`}
      token={onToken}
      panelLabel="SECURE CHECKOUT"
      stripeKey={publicKey}
    />
  )
}

export default Payment
