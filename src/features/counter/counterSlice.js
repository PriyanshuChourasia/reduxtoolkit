//  DUCKS pattern
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        // increment in line object function 
        incremented(state){
            state.value++;  // mutating code {here immer is working to  make this code immutable under the hood}
        },
        amountAdded(state, action){
            // console.log(state, action,'state');
            state.value += action.payload;
            console.log(state.value, action.payload);
            console.log(state, action);
        },
        decrement(state){
            state.value--;
        }
    }
});




export const {incremented, amountAdded, decrement} = counterSlice.actions
export default counterSlice.reducer;