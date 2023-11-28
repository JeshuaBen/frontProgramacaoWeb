import { useCallback, useState } from "react";
import api from "../@config/api";

//Inserino dados dos carros
export const useInsertCar = () => {
  const [insertLoading, setInsertLoading] = useState<boolean>(false);

  const insertCar = useCallback(async () => {
    setInsertLoading(true);
    try {
      const { data } = await api.post(`/carros`, {
        modelo: "Celta",
        placa: "ABC-1234",
      });
      console.log(data);
      alert("Carro inserido com sucesso!");
    } catch (err) {
      if (err) {
        alert("Erro ao listar os carro");
      }
    } finally {
      setInsertLoading(false);
    }
  }, []);

  return {
    insertLoading,
    insertCar,
  };
};
