export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
}

// Interfaz para la respuesta de la API que envuelve los productos
export interface ProductApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
