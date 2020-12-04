import { combineReducers } from 'redux';
import { persistReducer} from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';


import count from './count';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['count']
}

const rootReducer = combineReducers({
    count
})

export default persistReducer(persistConfig, rootReducer)



