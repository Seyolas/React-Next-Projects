
const reducer = (state,action)=>{

    if (action.type==='CLEAR_ALL') {
        return {...state, cart:[]}
    }

    if (action.type=='DELETE_ITEM') {
        return {...state, cart:state.cart.filter((i)=>i.id!==action.payload)};
    }
    if (action.type==='INCREASE') {
        let tempCart = state.cart.map((i)=>{
            if (i.id===action.payload) {
                return{...i, amount:i.amount+1}
            }
           return i;
        })

        return {...state,cart:tempCart}
    }

    if (action.type==='DECREASE') {
       
        let tempCart = state.cart.map((i)=>{
            if (i.id===action.payload.id) {
                i.amount--;
                if (i.amount===1) {
                    action.payload.type.disabled=false;
                }
                return{...i, amount:i.amount}
            }
           return i;
           
        }).filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }

    }
    
    if (action.type==='GET_TOTALS') {
        
        let {total,amount} = state.cart.reduce((CartTotal,i)=>{

            const {amount,price} = i;
            const itemTotal = price*amount;
            
            CartTotal.total+=itemTotal;
            CartTotal.amount+= amount;
            return CartTotal
        },
            {
                total:0,
                amount:0,
            }
        
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }

    if (action.type==='LOADING') {
     return {...state, loading:true}
    }
    
    if (action.type==='DISPLAY_ITEMS') {
     return {...state, cart:action.payload, loading:false}        
    }
    throw new Error('no matching action type keje')
}

export default reducer