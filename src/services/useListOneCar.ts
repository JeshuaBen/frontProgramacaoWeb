import { useCallback, useState } from "react";
import api from "../@config/api";

interface Cars {
  modelo: string;
  placa: string;
}

export const useListOneCar = () => {
  const [car, setCar] = useState<Cars>({} as Cars);
  const [loading, setIsLoading] = useState<boolean>(false);

};