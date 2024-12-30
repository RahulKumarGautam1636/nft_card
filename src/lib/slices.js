import { locations } from '@/constants';
import { createSlice } from '@reduxjs/toolkit'

// modal Reducer ---------------------------------------------------------------------------------------------------------

const loginSlice = createSlice({
name: 'IS_LOGGED_IN', initialState: true,
reducers: {
  loginAction: (state, action) => { 
    return action.payload;
  },
}
})
const { loginAction } = loginSlice.actions;
const loginReducer = loginSlice.reducer;

let currentUser = {
  Name: '',
  EncCompanyId: 'FFCeIi27FQMTNGpatwiktw==',
  PartyCode: '',
  RegMob1: '',
  Address: '',
  UserPassword: '',
  UserType: 'Customer',
  State: '3',
  StateName: 'West Bengal',
  City: '',
  Pin: '',
  Address2: '',

  DOB: '',
  DOBstr: '',
  Age: '',
  AgeMonth: '',
  AgeDay: '',
  IsDOBCalculated: 'N',
  GenderDesc: 'Male',
  Gender: 104,
  Country: 1,
  MemberId: '',

  RegNo: "",                                // Unused fields.
  Aadhaar: "",
  Salutation: "",
  Qualification: "",
  SpecialistId: '',
  AnniversaryDate: "",
  AnniversaryDatestr: "",
  compName: "",
  compAddress: "",
  compState: "",
  compPin: "",
  compPhone1: "",
  compPhone2: "",
  compMail: ""    
}

const userSlice = createSlice({
name: 'USER', initialState: currentUser,
reducers: {
  addUser: (state, action) => { 
    return Object.assign(state, action.payload);                 
  },
  dumpUser: (state, action) => { 
    return currentUser;                 
  }
}
})
const { addUser, dumpUser } = userSlice.actions;
const userReducer = userSlice.reducer;


// modal Reducer ---------------------------------------------------------------------------------------------------------

const modals = {                                                 
    LOCATION_MODAL: {status: false, data: ''},
    LOGIN_MODAL: {status: false, data: ''},
    PROFILE_MODAL: {status: false, data: ''},
    SHOP_SIDEBAR: {status: false, data: ''}
};

const modalSlice = createSlice({
  name: 'MODAL', initialState: modals,
  reducers: {
    modalAction: (state, action) => { 
      let { name, status, data } = action.payload;
      console.log(action); 
      return {...state, [name]: {status: status, data: data ? data : ''}};
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
      return { ...state, ...action.payload };  
    },
    toggleLocation: (state, action) => {
      state.locations = { ...state.locations, ...action.payload };
      return state;
    }
  }
})
const { dataAction, toggleLocation } = dataSlice.actions;
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

const cartSlice = createSlice({
  name: 'CART', initialState: {},
  reducers: {
    addToCart: (state, action) => { 
      return { ...state, [action.payload.id]: action.payload };  
    }, 
    removeFromCart: (state, action) => {   
      delete state[action.payload];
      return state;
    },
    dumpCart: (state, action) => {
      return {}
    }
  }
})
const { addToCart, removeFromCart, dumpCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

const wishlistSlice = createSlice({
  name: 'WISHLIST', initialState: {},
  reducers: {
    addToWishlist: (state, action) => { 
      return { ...state, [action.payload.id]: action.payload };  
    }, 
    removeFromWishlist: (state, action) => {   
      delete state[action.payload];
      return state;
    },
    dumpWishlist: (state, action) => {
      return {}
    }
  }
})
const { addToWishlist, removeFromWishlist, dumpWishlist } = wishlistSlice.actions;
const wishlistReducer = wishlistSlice.reducer;


const loaderSlice = createSlice({
  name: 'LOADING', initialState: {global: [], local: {}},
  reducers: {
    globalLoader: (state, action) => { 
      if (action.payload) {
        state.global.push(1);
        return state;
      } else {
        state.global.pop();  
        return state;
      }
    },
    localLoader: (state, action) => {
      let { name, status } = action.payload; 
      state.local[name] = status;
      return state;
    }
  }
})
const { globalLoader, localLoader } = loaderSlice.actions;
const loaderReducer = loaderSlice.reducer;


export { 
  userReducer, addUser, dumpUser,
  loginReducer, loginAction,
  modalAction, modalReducer, 
  dataAction, dataReducer, toggleLocation,
  categoryAction, categoryReducer, 
  addToCart, removeFromCart, dumpCart, cartReducer,
  wishlistReducer, addToWishlist, removeFromWishlist, dumpWishlist,
  loaderReducer, globalLoader, localLoader
};                                          
