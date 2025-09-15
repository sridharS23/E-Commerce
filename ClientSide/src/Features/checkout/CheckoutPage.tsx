import { Grid2, Typography } from "@mui/material";
import OrderSummary from "../../App/shared/components/OrderSummary";
import CheckoutStepper from "./CheckoutStepper";
import {loadStripe,  type StripeElementsOptions} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import { useFetchBasketQuery } from "../basket/basketApi";
import { useEffect, useMemo, useRef } from "react";
import { useCreatePaymentIntentMutation } from "./checkoutApi";
import { useAppSelector } from "../../App/store/store";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

export default function CheckoutPage() {
  const { data: basket, refetch } = useFetchBasketQuery();
  const [createPaymentIntent, {isLoading}] = useCreatePaymentIntentMutation();
  const created = useRef(false);
  const {darkMode} = useAppSelector(state => state.ui);


useEffect(() => {
  if (basket && !basket.clientSecret && !created.current) {
    createPaymentIntent().then(() => {
      refetch(); // 🔁 Refresh basket to get updated clientSecret
    });
    created.current = true;
  }
}, [basket, createPaymentIntent, refetch]);

  const options: StripeElementsOptions | undefined = useMemo(() => {
    if (!basket?.clientSecret) return undefined;
    return {
      clientSecret: basket.clientSecret,
      appearance: {
        labels: 'floating',
        theme: darkMode ? 'night' : 'stripe'
      }
    }
  }, [basket?.clientSecret, darkMode])

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8}>
        {!stripePromise || !options || isLoading ? (
          <Typography variant="h6">Loading checkout...</Typography>
        ) : (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutStepper />
          </Elements>
        )}


      </Grid2>
      <Grid2 size={4}>
        <OrderSummary />
      </Grid2>
    </Grid2>
  )
}