import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { shipmentReducer } from './Components/reducers/shipmentReducer';

const rootReducer = combineReducers({
    shipments:shipmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;