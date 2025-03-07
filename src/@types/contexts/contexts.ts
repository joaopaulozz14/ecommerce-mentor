import { ReactNode } from "react";

export interface AllProvidersProp {
  children: ReactNode;
}

interface ProductImage {
  thumbnail: string;
  desktop: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  previousPrice: number;
  discount: number;
  quantity: number;
  images: ProductImage[];
}

export type ProductData = Product[];

export interface DataContextType {
  data: ProductData;
  selectedProduct: Product | null;
  productID: number;
  currentSlide: number;
  lightIsActive: boolean;
  mainPhotoProduct: number;
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  setLightIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setProductID: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  setMainPhotoProduct: React.Dispatch<React.SetStateAction<number>>;
}
