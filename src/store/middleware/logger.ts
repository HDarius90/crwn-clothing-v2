import { Middleware, UnknownAction } from 'redux';

import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (isUnknownAction(action)) {
      if (!action.type) {
        return next(action);
      }

      console.log('type: ', action.type);
      console.log('payload: ', action.payload);
      console.log('currentState: ', store.getState());

      next(action);

      console.log('next state: ', store.getState());
    }
  };

  function isUnknownAction(action: unknown): action is UnknownAction {
    return typeof action === "object" && action !== null && "type" in action;
  }