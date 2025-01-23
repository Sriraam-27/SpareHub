export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}