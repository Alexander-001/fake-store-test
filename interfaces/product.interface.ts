export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductResponse {
  products: Product[];
  error: boolean;
  messageError: string;
}
