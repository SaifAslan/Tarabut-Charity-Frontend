'use client'
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'

interface Props {
  donateText: string;
  stripeID: string;
}
const stripePromise = loadStripe(
  //@ts-ignore
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const OurCausesSectionButtons = ({donateText, stripeID}:Props) => {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <form action="/api/checkout_sessions" method="POST" >
          <input value={stripeID} name="priceId" type="hidden"/>
          <section>
            <button className="green-btn" type="submit" role="link">
              {donateText}
            </button>
          </section>
        </form>
  )
}

export default OurCausesSectionButtons