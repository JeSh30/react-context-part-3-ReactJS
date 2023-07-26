import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addItemToCart: () => {},
})

export default CartContext
