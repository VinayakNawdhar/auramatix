import { createSlice } from "@reduxjs/toolkit";

export const Cart = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalAmount: 0
    },
    reducers: {
        addItemsToCart(state, action) {
            state.cart.push(action.payload.cart);
            Cart.caseReducers.findTotal(state);
        },
        removefromcart(state,action){
            state.cart = state.cart.filter(item => item.productId != action.payload.productId);
            Cart.caseReducers.findTotal(state);
        },
        findTotal(state) {
            state.totalAmount = 0;
            state.cart.map(item => {
                if(item.price){
                    state.totalAmount += (Number(item.price)*Number(item.quantity))
                }
            })
        },
        decrementQuantity(state,action){
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].productId == action.payload.productId && state.cart[i].quantity > 1){
                    state.cart[i].quantity -= 1;
                    break;
                }
                else if(state.cart[i].productId == action.payload.productId && state.cart[i].quantity == 1){
                   state.cart =  state.cart.filter((item,index) => index != i);
                   break;
                }
            }
            Cart.caseReducers.findTotal(state);
        },
        incrementQuantity(state,action){
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].productId == action.payload.productId){
                    state.cart[i].quantity += 1;
                }
            }
            Cart.caseReducers.findTotal(state);
        },
        deleteAllFromCart(state){
            state.cart = [];
        },
        updateScheduledTime(state,action){
            state.scheduledTime = action.payload.hour + ":" + action.payload.minute;
        }
    }
})

export const { addItemsToCart,findTotal,removefromcart,decrementQuantity,incrementQuantity,deleteAllFromCart,updateScheduledTime } = Cart.actions;