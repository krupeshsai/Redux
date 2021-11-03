const Redux = require("redux");
const ReduxLogger = require("redux-logger");

const createStore = Redux.createStore;
const combineReducers = Redux.combineReducers;
const applyMiddleWare = Redux.applyMiddleware;

const logger = ReduxLogger.createLogger()

//Actions // 

const BUY_CAKE ="BUY_CAKE"
const BUY_COCALATE ="BUY_COCALATE"




function buyCake() {
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    
    }
}

function buyCocalate() {
    return {
        type:BUY_COCALATE
    }
}

//Actions //



const initialCakeState = {
    numOfCakes : 10
}

const initialCocalateState = {
    numOfCocalates : 20
}

// reducers // 

const CakeReducer = (state = initialCakeState , action) => {
   switch (action.type) {
       case BUY_CAKE: return {
           ...state,
           numOfCakes : state.numOfCakes - 1
       }
       default: return state    
   }
}

const CocalateReducer = (state = initialCocalateState , action) => {
    switch (action.type) {
        case BUY_COCALATE: return {
         ...state,
         numOfCocalates : state.numOfCocalates - 1
     }
        default: return state    
    }
 }
 
const rootReducer = combineReducers({
    cake : CakeReducer,
    cocalate: CocalateReducer
})


// store //

const store = createStore(rootReducer, applyMiddleWare(logger))
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCocalate())
store.dispatch(buyCocalate())
unsubscribe();