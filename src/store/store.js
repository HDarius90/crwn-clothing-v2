import { compose, legacy_createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import { rootReducer } from './root-reducer';
import { thunk } from 'redux-thunk';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === 'production' && logger,
  thunk,
].filter(Boolean);

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancers(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
