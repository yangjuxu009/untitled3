
import {combineReducers} from 'redux';
import app2reducer from "./app2Reducer";
import appreducer from "./appReducer";

const appReducers = combineReducers({
    app2reducer,
    appreducer,
});
export default appReducers;
