import React, { useState, useEffect } from 'react'
import { useStoreValue } from '../../contextApi/StateProvider'
import { firestore } from '../../firebase/firebase'
import DisplayOrder from './DisplayOrder'



function FetchOrders() {
  const [{ user }] = useStoreValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      firestore
        .collection('users')
        .doc(user?.id)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className="orders">
      <h1 className="orders__header">My orders</h1>
      <div>
        {orders.map(order => (
          <DisplayOrder order={order} key={order.id} />
        ))}
      </div>
     
    </div>
  )
}

export default FetchOrders
