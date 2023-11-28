import { useCallback, useState } from "react";
import api from "../@config/api";

export const useDeleteCar = () => {
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const deleteCar = useCallback(async (codigo: string) => {
    setLoadingDelete(true);
    try {
      const { data } = await api.delete(`/carros/${codigo}`);
      console.log(data);
      alert("Carro deletado com sucesso!!");
    } catch (err) {
      if (err) {
        alert("Erro ao listar os carro");
      }
    } finally {
      setLoadingDelete(false);
    }
  }, []);

  return {
    loadingDelete,
    deleteCar,
  };
};
