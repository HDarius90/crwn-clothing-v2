import { fireEvent, screen } from '@testing-library/react';
import Navigation from '../navigation.component';
import { renderWithProviders } from '../../../utils/test/test.utils';
import { signOutStart } from '../../../store/user/user.action';
import * as reactRedux from 'react-redux';
import * as userAction from "../../../store/user/user.action";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Navigation tests', () => {
  const useDispatchMock = reactRedux.useDispatch;

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });
  afterEach(() => {
    useDispatchMock.mockClear();
  });

  test('It should render a Sign In Link and not Sign Out Link if there is no currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test('It should render a Sign Out Link and not Sign In Link if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();
  });

  test('It should display cart dropdown when isCartOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.getByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });

  test('It should hide cart dropdown when isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test('should dispatch singOutStart action when sign out link is clicked', async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);

    const signOutStartAction = jest.spyOn(userAction, 'signOutStart');

    expect(signOutLinkElement).toBeInTheDocument();
    await fireEvent.click(signOutLinkElement);
    expect(useDispatchMock).toHaveBeenCalled();
    expect(signOutStartAction).toHaveBeenCalled();
  });
});
