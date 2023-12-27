import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import CardContato from "../../components/Contato";
import Lista from "./styles";

const ListaContato = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens);

  return (
    <>
      {/* {console.log("dfds")} */}
      {/* {console.log(contatos)} */}
      <Lista>
        {contatos.map((contato) => (
          <CardContato contato={contato} key={contato.id} />
        ))}
      </Lista>
    </>
  );
};

export default ListaContato;
