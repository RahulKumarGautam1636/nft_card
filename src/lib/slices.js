import { createSlice } from '@reduxjs/toolkit'

// modal Reducer ---------------------------------------------------------------------------------------------------------

const modals = {                                                  // state of all modals.
    PARTNER_FORM: {status: false, data: ''},
    QUOTE_FORM: {status: false, data: ''},
    FAQ: {status: false, data: ''},
    RETURN_POLICY: {status: false, data: ''},
};

const modalSlice = createSlice({
  name: 'MODAL', initialState: modals,
  reducers: {
    modalToggled: (state, action) => { 
      console.log(action); 
      return {...state, [action.payload.name]: {status: action.payload.status, data: action.payload.data}};
    },
  }
})
const { modalToggled } = modalSlice.actions;
const modalReducer = modalSlice.reducer;

// NAV Reducer ---------------------------------------------------------------------------------------------------------

const navSlice = createSlice({
  name: 'NAV_MENU', initialState: '#/',
  reducers: {
    navToggled: (state, action) => { 
      return action.payload;  
    }
  }
})
const { navToggled } = navSlice.actions;
const navReducer = navSlice.reducer;




export { modalToggled, modalReducer, navToggled, navReducer };                                          
