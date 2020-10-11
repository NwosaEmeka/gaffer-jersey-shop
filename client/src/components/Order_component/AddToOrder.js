import { firestore } from '../../firebase/firebase'

export const addToOrders = async (item, total, user,basket) => {
    if (user) {
      firestore
        .collection('users')
        .doc(user?.id)
        .collection('orders')
        .doc(item.id)
        .set({
          basket: basket,
          amount: total,
          created: item.created
      })
    }
  }