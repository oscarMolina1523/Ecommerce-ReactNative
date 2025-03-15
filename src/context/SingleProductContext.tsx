import { createContext, useCallback, useContext, useState } from "react";
import products from "../data/ProductsData";
import { Product } from "../models/Products";
import { SingleProductContextType } from "./TypesContext";


const SingleProductContext = createContext<SingleProductContextType | undefined>(undefined);

export const SingleProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loadingProd, setLoading] = useState<boolean>(false);
  const [errorProd, setError] = useState<string | undefined>(undefined);

  const fetchSingleProduct = useCallback(async (prodId: string) => {
    setLoading(true);
    setError(undefined);
    try {
      const singlePost = products.find(prod => prodId === prod.id);
      if (singlePost) {
        setProduct(singlePost);
      }
    } catch (error) {
      setError("Error fetching single product: " + error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <SingleProductContext.Provider value={{ product, loadingProd, errorProd, fetchSingleProduct }}>
      {children}
    </SingleProductContext.Provider>
  );
}

export const useSingleProductContext = () => {
  const context = useContext(SingleProductContext);
  if (!context) {
    throw new Error("useSingleProductContext must be used within a SingleProductProvider");
  }
  return context;
};