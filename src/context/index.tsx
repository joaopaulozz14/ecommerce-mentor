import { JSX, useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  AllProvidersProp,
  DataContextType,
  ProductData,
} from "../@types/contexts/contexts";

export const DataContext = createContext<DataContextType>(
  {} as DataContextType
);

export const DataProvider = ({ children }: AllProvidersProp): JSX.Element => {
  const [data, setData] = useState<ProductData>([]);
  const [mainPhotoID, setMainPhotoID] = useState<number>(1);
  const [currentSlide, setCurrentSlide] = useState<number>(mainPhotoID);
  const [lightIsActive, setLightIsActive] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        mainPhotoID,
        currentSlide,
        lightIsActive,
        setMainPhotoID,
        setCurrentSlide,
        setLightIsActive,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => useContext(DataContext);
