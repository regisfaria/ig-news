import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_PRIVATE_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'ig.news',
      version: '0.0.1'    
    }
  },
);
