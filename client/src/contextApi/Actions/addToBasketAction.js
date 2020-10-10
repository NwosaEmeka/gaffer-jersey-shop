export const addtoBasketAction = (basket, product) => {
  let isInBasket = false;
  let basketItems = basket;
  basketItems.forEach(item => {
    if (item._id === product._id) {
      item.quantity++;
      isInBasket = true
    }
  })
  if (!isInBasket) {
    basketItems.push({ ...product, quantity: 1 })
  }
  localStorage.setItem('basketItem', JSON.stringify(basketItems));
  return basketItems;
}