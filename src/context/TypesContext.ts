import { Product } from "../models/Products";


export interface SingleProductContextType {
  product: Product | null | undefined;
  loadingProd: boolean;
  errorProd?: string;
  fetchSingleProduct: (productId: string) => Promise<void>;
}