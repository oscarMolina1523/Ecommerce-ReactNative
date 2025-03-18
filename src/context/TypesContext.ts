import { CartItem, Product } from "../models/Products";
import { User } from "../models/User";


export interface SingleProductContextType {
  product: Product | null | undefined;
  loadingProd: boolean;
  errorProd?: string;
  fetchSingleProduct: (productId: string) => Promise<void>;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
}