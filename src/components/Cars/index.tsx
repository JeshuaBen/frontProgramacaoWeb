import * as S from "./styles";

type Cars = {
  modelo: string;
  placa: string;
};

const Cars = ({ modelo, placa }: Cars) => {
  return (
    <S.Container>
      <S.Text>{modelo}</S.Text>
      <S.Text>{placa}</S.Text>
    </S.Container>
  );
};

export default Cars;
