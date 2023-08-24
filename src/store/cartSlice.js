import { createSlice } from "@reduxjs/toolkit";


const initialState=[];
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state, action) {
            const { id, quantity: requestedQuantity } = action.payload;
            const existingItem = state.find(item => item.id === id);
            
            if (existingItem) {
                const availableQuantity = existingItem.availableQuantity;
                if (existingItem.quantity + requestedQuantity <= availableQuantity) {
                    existingItem.quantity += requestedQuantity;
                } else {
                    console.log("Error");
                }
            } else {
                state.push({ ...action.payload });
            }
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        },
        
    }
});

export const {add,remove}= CartSlice.actions;
export default CartSlice.reducer;
