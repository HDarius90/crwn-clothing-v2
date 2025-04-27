import { legacy_createStore } from 'redux';
import { rootReducer } from '../../store/root-reducer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = legacy_createStore(rootReducer, preloadedState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
