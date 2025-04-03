import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartItems: [] };
const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: initialState,
        reducers: {
            addCartItems: (state, action) => {
                const item = action.payload;
                const book = state.cartItems.find((x) => x.ID === item.ID);
                // 如果book存在【有加入過的商品】 (將book轉換為布林值)
                if (!!book) {
                    const cartItems = state.cartItems.map((x) => x.ID === book.ID ? item : x);
                // 返回新的cartItems陣列並將其更新到state.cartItems
                state.cartItems = cartItems;
                }
                // 如果book不存在【新商品】
                else{
                    state.cartItems = [...state.cartItems, item];
                }
            },
        }
    }
);

// export state/actions/reducer to global
export const selectCartItems = (state) => state.cart.cartItems;
export const { addCartItems } = cartSlice.actions;
export default cartSlice.reducer;
