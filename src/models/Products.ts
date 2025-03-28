export interface Product {
  id: string; 
  name: string; 
  image: any; 
  discount: number; 
  priceWithDiscount: number; 
  originalPrice: number; 
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}
