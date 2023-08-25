import { createContext } from "react";

const CheckoutContext = createContext({});
export const CheckoutProvider = ({ children }) => {
  return <CheckoutContext.Provider>{children}</CheckoutContext.Provider>;
};

export default CheckoutContext;
