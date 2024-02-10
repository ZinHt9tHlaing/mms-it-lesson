import { combineReducer createStore} from "redux";
import counterReducer from "./reducer/countReducer";

const combine = combineReducer({
    counter:counterReducer,
});

const store = createStore(combine);
export default store;
