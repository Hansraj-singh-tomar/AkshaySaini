import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Todo - vanilla(older) Redux => Don't Mutate State
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            //! Redux Toolkit 
            // We have to mutate the state 
            //? Redux Toolkit uses the immerjs library behind the scene
            //? Immerjs - Allow you to work with immutable state in a more convenient way.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            console.log(state); // it will give us proxy object as a output 
            console.log(current(state)) // it will give us actual state 
            // state = []; // This won't work // we are not mutating the state // we are just adding the new reference of array to it

            // RTK - Either we can mutate the existing state or return a new state 
            state.items.length = 0;

            // This is also valid to do 
            return { items: [] }; // we are replacing the original state with that
        }
    }
})

export default cartSlice.reducer; // combination of small reducer functions
export const { addItem, removeItem, clearCart } = cartSlice.actions;