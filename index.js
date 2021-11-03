const redux = require("redux")
const createStore = redux.createStore;



const BUY_CAKE ="BUY_CAKE"



function buyCake() {
    return {
        type:BUY_CAKE,
        info:"First Redux Action"
    
    }
}

const initialState = {
    numOfCakes : 10
}

const Reducer = (state = initialState , action) => {
   switch (action.type) {
       case BUY_CAKE: return {
           ...state,
           numOfCakes : state.numOfCakes - 1
       }
       default: return state
          
   }
}

const store = createStore(Reducer)
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => console.log("Update state" , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()