import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'
// import CartItem from '../components/CartItem';

const cart_reducer = (state, action) => {
  if (action.type===ADD_TO_CART) {
    const {id,color,amount,product} = action.payload;
    const tempItem = state.cart.find((i)=>i.id===id+color)

    if (tempItem) {
        const tempCart = state.cart.map((i)=>{
          if (i.id===id+color) {
            let newAmount = i.amount + amount;
            if (newAmount>i.max) {
              newAmount = i.max;
            }
            return {...i,amount:newAmount}
          }
          else {
            return i;
          }
        })
        return {...state, cart:tempCart}
    }
    else {
      const newItem = {
        id:id+color,
        name:product.name,
        color,
        amount,
        image:product.images[0].url,
        price:product.price,
        max:product.stock,
      }
      return {...state, cart:[...state.cart,newItem]}
    }

  }
  if (action.type === REMOVE_CART_ITEM) {
      const tempCart = state.cart.filter((i)=>i.id!==action.payload);
      return {...state, cart:tempCart}
  }
  if (action.type === CLEAR_CART) {
    return {...state, cart:[]}
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const {id,value} = action.payload
    const tempCart = state.cart.map((i)=>{
      if (i.id === id) {

        if (value === 'inc') {
          let newAmount = i.amount + 1;

          if (newAmount>i.max) {
            newAmount = i.max;
          }
          return {...i,amount:newAmount}
        }

        if (value ==='dec') {
          let newAmount = i.amount - 1;
          if (newAmount<1) {
            newAmount=1
          }
          return {...i,amount:newAmount}
        }
      }
      return i;


    })

    return {...state, cart:tempCart}
    
  }

  if (action.type === COUNT_CART_TOTALS) {
    const {total_items, total_amount}=state.cart.reduce((total,cartItem)=>{

      const {amount,price} = cartItem;

      total.total_items+=amount;

      total.total_amount+=price*amount;
      
      return total
    },
    {
      total_items:0, total_amount:0,
    })
    return {...state,total_items,total_amount}
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
