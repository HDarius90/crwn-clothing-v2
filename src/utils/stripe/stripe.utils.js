import { loadStripe } from '@stripe/stripe-js';

export const stipePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
