export const increaseItem = (basket, item) => {
  let newBasket = basket
  newBasket.forEach(currentItem => {
    if (currentItem._id === item._id) {
      currentItem.quantity++
    }
  })
  localStorage.setItem('basket', JSON.stringify(newBasket));
  return newBasket
}

export const decreaseItem = (basket, item) => {
  let newBasket = basket
  newBasket.forEach((currentItem,index) => {
    if (currentItem._id === item._id) {
      currentItem.quantity--
      if (currentItem.quantity === 0) {
        newBasket.splice(index,1)
      }
    }
  })
  localStorage.setItem('basket', JSON.stringify(newBasket));
  return newBasket
}

export const removeItem = (basket, item) => {
  let newBasket = basket.filter(basketItem => basketItem._id !== item._id)
  localStorage.setItem('basket', JSON.stringify(newBasket));
  return newBasket
}