import {createStore} from 'redux'
import rootReducer from '../reducers'
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const persistor = persistStore(store)

export {store, persistor}
