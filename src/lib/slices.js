import { locations } from '@/constants';
import { createSlice } from '@reduxjs/toolkit'

// modal Reducer ---------------------------------------------------------------------------------------------------------

const modals = {                                                 
    LOCATION_MODAL: {status: false, data: ''},
};

const modalSlice = createSlice({
  name: 'MODAL', initialState: modals,
  reducers: {
    modalAction: (state, action) => { 
      let { name, status, data } = action.payload;
      console.log(action); 
      return {...state, [name]: {status: status, data: data}};
    },
  }
})
const { modalAction } = modalSlice.actions;
const modalReducer = modalSlice.reducer;

// Data Reducer ---------------------------------------------------------------------------------------------------------

const initData = { 
  locations: { current: {id: 3, name: 'Kolkata'}, all: locations }
}

const dataSlice = createSlice({
  name: 'SITE_DATA', initialState: initData,
  reducers: {
    dataAction: (state, action) => { 
      return action.payload;  
    }
  }
})
const { dataAction } = dataSlice.actions;
const dataReducer = dataSlice.reducer;


const categorySlice = createSlice({
  name: 'CATEGORIES', initialState: '',
  reducers: {
    categoryAction: (state, action) => { 
      return action.payload;  
    }
  }
})
const { categoryAction } = categorySlice.actions;
const categoryReducer = categorySlice.reducer;


export { modalAction, modalReducer, dataAction, dataReducer, categoryAction, categoryReducer };                                          
