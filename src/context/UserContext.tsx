import React, { createContext, useContext, useState } from "react";
import { CartItem } from "../models/Products";
import { User } from "../models/User";
import { UserContextType } from "./TypesContext";

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // User per deffect
  const defaultUser : User = {
    id: "1",
    name: "John Flex Doe Cooper",
    image:"https://i.pinimg.com/474x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg",
    userName: "johndoe",
    email: "johndoe@example.com",
    country: "USA",
    city: "New York",
    phoneNumber: "123-456-7890",
    cart: [],
  };

  const [user, setUser ] = useState<User>(defaultUser);

  const addToCart = (item: CartItem) => {
    setUser((prevUser) => ({
      ...prevUser ,
      cart: [...prevUser.cart, item],
    }));
  };

  const removeFromCart = (itemId: string) => {
    setUser ((prevUser ) => ({
      ...prevUser ,
      cart: prevUser.cart.filter(item => item.id !== itemId),
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser , addToCart, removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser Context must be used within a UserProvider");
  }
  return context;
};