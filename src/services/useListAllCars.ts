import { useCallback, useState } from "react";
import api from "../@config/api";

interface Cars {
  modelo: string;
  placa: string;
}
[];

export const useListAllCars = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllCars = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get("/carros");
      setCars(data);
    } catch (err) {
      if (err) {
        alert("Erro ao listar os carros");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    cars,
    isLoading,
    getAllCars,
  };
};
