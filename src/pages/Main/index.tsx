import * as S from "./styles";
import Cars from "../../components/Cars";
import { useDeleteCar } from "../../services/useDeleteCar";
import { useInsertCar } from "../../services/useInsertCar";
import { useListAllCars } from "../../services/useListAllCars";
import { useListOneCar } from "../../services/useListOneCar";
import { useUpdateCar } from "../../services/useUpdateCar";

const Main: React.FC = () => {
  const { cars, getAllCars, isLoading } = useListAllCars();
  const { car, getOneCar, loading } = useListOneCar();
  const { loadingDelete, deleteCar } = useDeleteCar();
  const { insertCar, insertLoading } = useInsertCar();
  const { updateCar, updateLoading } = useUpdateCar();

  const buttonsInfos = [
    {
      title: "Listar Todos os Carros",
      onClick: getAllCars,
    },
    {
      title: "Listar um Carro",
      onClick: getOneCar("1"),
    },
    {
      title: "Inserir um Carro",
      onClick: insertCar,
    },
    {
      title: "Atualizar um Carro",
      onClick: updateCar("1"),
    },
    {
      title: "Deletar um Carro",
      onClick: deleteCar("1"),
    },
  ];

  return (
    <S.Container>
      <S.ButtonsWrapper>
        {buttonsInfos.map((buttonInfo) => (
          <S.Button key={buttonInfo.title} onClick={() => buttonInfo.onClick}>
            {buttonInfo.title}
          </S.Button>
        ))}

        {updateLoading ||
          insertLoading ||
          loading ||
          isLoading ||
          (loadingDelete && <S.Loading>CARREGANDO....</S.Loading>)}

        {!isLoading &&
          cars &&
          cars.length > 0 &&
          cars.map((car, index) => (
            <Cars key={index} modelo={car.modelo} placa={car.placa} />
          ))}

        {!loading && car && <Cars modelo={car.modelo} placa={car.placa} />}
      </S.ButtonsWrapper>
    </S.Container>
  );
};

export default Main;
