import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils/test/test.utils';
import CartIcon from './cart-icon.component';

describe('Cart Icon tests', () => {
  test('Uses preloaded state to render', () => {
    const initialCartItems = [
      { id: 1, imageUrl: 'test', name: 'Item A', price: 1, quantity: 2 },
      { id: 2, imageUrl: 'test', name: 'Item B', price: 1, quantity: 1 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });
    const cartIconElement = screen.getByText('3');
    expect(cartIconElement).toBeInTheDocument();
  });
});
