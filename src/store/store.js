import { compose, legacy_createStoree, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStoree(rootReducer, undefined, composedEnhancers);
