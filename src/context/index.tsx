import { JSX, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  AllProvidersProp,
  DataContextType,
  ProductData,
  Product,
} from "../@types/contexts/contexts";

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: AllProvidersProp): JSX.Element => {
  const [data, setData] = useState<ProductData>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productID, setProductID] = useState<number>(0);
  const [mainPhotoProduct, setMainPhotoProduct] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [lightIsActive, setLightIsActive] = useState<boolean>(false);
  const [showModalCart, setShowModalCart] = useState<boolean>(true);
  const [totalPriceProduct, setTotalPriceProduct] = useState<number>(0);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const result: Product[] = await response.json();

        setData(result);

        if (result.length > 0) {
          setSelectedProduct(result[productID]);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    setTotalPriceProduct(
      (selectedProduct?.price ?? 0) * (selectedProduct?.quantity ?? 0)
    );
  }, [selectedProduct]);
  
  return (
    <DataContext.Provider
      value={{
        data,
        selectedProduct,
        productID,
        currentSlide,
        lightIsActive,
        mainPhotoProduct,
        totalPriceProduct,
        showModalCart,
        setData,
        setSelectedProduct,
        setProductID,
        setCurrentSlide,
        setLightIsActive,
        setMainPhotoProduct,
        setShowModalCart
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);
