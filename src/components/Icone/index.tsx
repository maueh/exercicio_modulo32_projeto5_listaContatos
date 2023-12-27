import * as S from "./styles";

export type Props = {
  icone?: string;
  color?: "primary" | "danger";
};

const Icone = ({ icone, color }: Props) => (
  <S.Icone color={color}>{icone}</S.Icone>
);

export default Icone;
