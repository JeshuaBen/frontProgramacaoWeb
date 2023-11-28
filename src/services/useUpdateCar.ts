import { useCallback, useState } from "react";
import api from "../@config/api";

export const useUpdateCar = () => {
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  const updateCar = useCallback(async (codigo: string) => {
    setUpdateLoading(true);
    try {
      const { data } = await api.post(`/carros/${codigo}`, {
        modelo: "Porsche",
        placa: "DEF-1234",
      });
      console.log(data);
      alert("Carro atualizado com sucesso!");
    } catch (err) {
      if (err) {
        alert("Erro ao listar os carro");
      }
    } finally {
      setUpdateLoading(false);
    }
  }, []);

  return {
    updateLoading,
    updateCar,
  };
};
