const Redux = require("redux");
const createStore = Redux.createStore;


//state // 

const initialState = {
loading : false,
users : [],
error : ""
}


//Action //

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS "
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"


const fetchUsersRequest = () => {
   return {
       type:FETCH_USERS_REQUEST
   }
}

const fetchUsersSuccess = users => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload: users
    }
 }

 const fetchUsersFailure = error => {
    return {
        type:FETCH_USERS_Failure,
        payload: error
    }
 }

 // Reducers //

 const reducer = (state = initialState , action) => {
   switch (action.state) {
       case FETCH_USERS_REQUEST: return {
        ...state,
        loading : true
       }
           
       case FETCH_USERS_SUCCESS: return {
    
        loading : false,
        users : action.payload,
        error: ""
        
       }

       case FETCH_USERS_FAILURE: return {
        loading: false,
        users : [],
        error: action.payload
       }
           
       default: return state
         
   }
 }

 
// Store //

 const store = createStore(Reducer);