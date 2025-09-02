import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};


const initialState: CounterState = {
  data: 42,
};

export const  counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state, action) => {
      state.data += action.payload;
    },
    decreament: (state, action) => {
      state.data -= action.payload;
    }
  }
})

export const { increament, decreament } = counterslice.actions;

export function increamentLegacy (amount = 1) {
  return { type: 'INCREMENT', payload: amount };
}

export function decreamentLegacy (amount = 1) {
  return { type: 'DECREMENT', payload: amount };
}


export function counterReducer(state = initialState, action: { type: string , payload: number })
 {
  switch (action.type) {
    // Define action handlers here if needed
      
        case 'INCREMENT':
        return { ...state, data: state.data + action .payload };
      
        case 'DECREMENT':
        return { ...state, data: state.data - action.payload };
      
        default:
        return state;
    
  }
}