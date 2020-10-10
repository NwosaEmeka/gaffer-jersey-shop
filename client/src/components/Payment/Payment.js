import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {CurrencyFormatter} from '../../Utils/CurrencyFormatter'
import axios from 'axios'


function Payment({ total }) {
  const totalPrice = total * 100 //stripe only accept cents
  const publicKey = 'pk_test_51HaM5NGKSWUdqQNS3Dull99FPGtYe2q5SJ0iLhScOra3e3z7VVY3NjBazpU93W7iuq9dpABLR1eKXM8sXMSUkTXJ00Tb36WVIT'

  const onToken = (token) => {
    console.lob(token)
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
