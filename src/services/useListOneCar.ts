import { useCallback, useState } from "react";
import api from "../@config/api";

interface Cars {
  modelo: string;
  placa: string;
}

export const useListOneCar = () => {
  const [car, setCar] = useState<Cars>({} as Cars);
  const [loading, setIsLoading] = useState<boolean>(false);

  const getOneCar = useCallback(async (codigo: string) => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`/carros/${codigo}`);
      setCar(data);
    } catch (err) {
      if (err) {
        alert("Erro ao listar os carro");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    car,
    loading,
    getOneCar,
  };
};
