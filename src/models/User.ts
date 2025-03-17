import { CartItem } from "./Products";

export interface User {
  id: string,
  name: string,
  userName: string,
  email: string,
  country: string,
  city: string,
  phoneNumber: string,
  cart: CartItem[]
}