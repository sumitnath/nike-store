import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    cartTotalAmount: 0,
    cartTotalQuantity:0
};
const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemsToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`${action.payload.title} quantity increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state,action)=>{
        const removeItem = state.cartItems.filter((item)=> 
        item.id !== action.payload.id)
        state.cartItems = removeItem
        localStorage.setItem("cart",JSON.stringify(state.cartItems))
        toast.success(`${action.payload.title} Removed from cart`);
    },
    setIncreaseItemQyt:(state,action)=>{
     const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
          );
          if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.success(` Item Quantity Increased`);
          }
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQyt:(state,action)=>{
        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
              );
              if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success(` Item Quantity Decreased`);
              }
              localStorage.setItem("cart", JSON.stringify(state.cartItems));
       
    },
    setClearCartItems:(state,action)=>{
        state.cartItems =[]
        toast.success(`Cart Cleared`)
        localStorage.setItem("cart", JSON.stringify(state.cartItems));    
    },
    setGetTotals: (state, action) => {
        let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
  
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;
  
          return cartTotal;
        }, {
          totalAmount: 0,
          totalQTY: 0,
        });
        state.cartTotalAmount = totalAmount;
        state.cartTotalQuantity = totalQTY;
    }
  },
});
export const { setCloseCart, setOpenCart, setAddItemsToCart,
    setRemoveItemFromCart,setClearCartItems,setDecreaseItemQyt,
    setIncreaseItemQyt,setGetTotals } =
  CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount
export const selectTotalQTY = (state) => state.cart.cartTotalQuantity
export default CartSlice.reducer;
