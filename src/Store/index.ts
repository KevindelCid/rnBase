


import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import counterSlice from './slices/counterSlice'
import  authSlice  from './slices/authSlice'
import postsSlice from './slices/postsSlice'
import themeSlice from './slices/themeSlice'




const reducers = combineReducers({
    counter: counterSlice,
    auth: authSlice,
    posts: postsSlice,
    theme: themeSlice
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
  debug: true,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
   
    return middlewares
  },
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
