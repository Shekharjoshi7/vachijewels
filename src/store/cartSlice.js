import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
}
const saveCart=(myCart)=>{
    localStorage.setItem("cart",myCart)
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            let newCart = state.cart
            let find = newCart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                newCart[find].quantity += 1
                saveCart(newCart)
            }
            else {
                
                newCart.push(action.payload);
                saveCart(newCart)
            }


        },
        removeToCart: (state) => {
            state.cart=[];


        },
        incrementQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                else {
                    return item;
                }
            })
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    if(item.quantity!==0){

                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return { ...item, quantity: 0 }
                    }
                    
                }
                else {
                    return item;
                }
            })
        },
        getCartTotal:(state)=>{
            let {totalPrice,totalQuantity} = state.cart.reduce(
                (cartTotal,cartItem)=>{
                    const{price,quantity}=cartItem;
                    const itemTotal= price * quantity;
                    cartTotal.totalPrice+= itemTotal;
                    cartTotal.totalQuantity+=quantity;
                    return cartTotal
                },
                {
                    totalPrice: 0 ,
                    totalQuantity:0
                }
            );
                state.totalPrice=parseInt(totalPrice.toFixed(2));
                state.totalQuantity =totalQuantity;
        }
    }
});

export const { addToCart,removeToCart, incrementQuantity ,decrementQuantity ,getCartTotal} = cartSlice.actions;
export default cartSlice.reducer