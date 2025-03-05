import { ReactNode } from "react";

export interface AllProvidersProp {
  children: ReactNode;
}

interface ProductImage {
  thumbnail: string;
  desktop: string;
}

interface Product {
  id: number;
  image: ProductImage;
}

export type ProductData = Product[];

export interface DataContextType {
  data: ProductData;
  mainPhotoID: number;
  currentSlide: number;
  lightIsActive: boolean;
  setLightIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setMainPhotoID: React.Dispatch<React.SetStateAction<number>>;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}
