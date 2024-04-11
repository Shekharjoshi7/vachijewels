import { createSlice } from '@reduxjs/toolkit'

const item = typeof localStorage !== 'undefined' && localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')): [];

const initialState = {
    cart: item,
    totalQuantity: 0,
    totalPrice: 0
};

const saveCart = (myCart) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(myCart));
    }
};
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
            let newCart = state.cart
            saveCart(newCart)

        },
        incrementQuantity: (state, action) => {
         
            state.cart  = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                else {
                    return item;
                }
            })
            let newCart=state.cart
            saveCart(newCart)
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    // Ensure quantity doesn't go below 0
                    const newQuantity = Math.max(0, item.quantity - 1);
                    // If quantity becomes zero, remove the item from the cart
                    if (newQuantity === 0) {
                        return null; // Mark item for removal
                    }
                    return { ...item, quantity: newQuantity };
                }
                return item;
            }).filter(Boolean); // Filter out null values (items marked for removal)
        
            // Save the updated cart to localStorage
            saveCart(state.cart);
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