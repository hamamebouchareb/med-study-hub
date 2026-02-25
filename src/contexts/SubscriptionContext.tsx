import { createContext, useContext, useState, ReactNode } from "react";

interface SubscriptionContextType {
  isSubscribed: boolean;
  setIsSubscribed: (v: boolean) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  isSubscribed: false,
  setIsSubscribed: () => {},
});

export const useSubscription = () => useContext(SubscriptionContext);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <SubscriptionContext.Provider value={{ isSubscribed, setIsSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  );
};
