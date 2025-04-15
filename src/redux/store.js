import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from '../redux/contacts/slice';
import filtersReducer from '../redux/filters/slice';
import authReducer from '../redux/auth/slice';
import moveReducer from '../redux/move/slice';
import  tasksReducer  from '../redux/tasks/slice';
import {  persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER,} from 'redux-persist'
import imageReducer from '../redux/img/slice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = persistReducer({
  key: 'token',
  storage,
  whitelist: ['token']
} , authReducer)
 
export const store = configureStore({
  reducer: {
    auth: authPersistConfig,
    contacts: contactsReducer,
    filters: filtersReducer,
    tasks: tasksReducer,
    image:  imageReducer,
    move: moveReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); 