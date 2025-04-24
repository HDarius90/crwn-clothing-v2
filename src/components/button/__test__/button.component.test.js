import { render, screen } from '@testing-library/react';
import 'jest-styled-components'
import Button from '../button.component';
test('renders learn react link', () => {
  render(<Button>Test</Button>);
  const buttonElement = screen.getByText(/Test/i);
  expect(buttonElement).toHaveStyleRule('background-color: black');
});
