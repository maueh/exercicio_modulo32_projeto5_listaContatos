import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Contato from "../../models/Contato";
import { RootReducer } from "../../store";
import { remover } from "../../store/reducers/contatos";

import Icone from "../Icone";
import * as S from "./styles";
import { DangerOutlineButton, OutlineButton } from "../../styles";

type Props = {
  contato: Contato;
};

const CardContato = ({ contato }: Props) => {
  const {
    nomeCompleto: nomeOriginal,
    id,
    telefone: telefoneOriginal,
    email: emailOriginal,
  } = contato;

  const contatos = useSelector((state: RootReducer) => state.contatos);
  const [estaEditando, setEstaEditando] = useState(false);
  const [nome, setNome] = useState(contato.nomeCompleto);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [email, setEmail] = useState(contato.email);

  function alterarEstadoEdicao() {
    setEstaEditando(!estaEditando);
  }

  function salvarEdicao() {
    novoNomeValido()
      ? alterarEstadoEdicao()
      : alert(
          "O nome não é válido ou um contato com o mesmo nome já foi adicionado"
        );
  }

  function descartarAlteracoes() {
    setNome(nomeOriginal);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal);
    setEstaEditando(false);
  }

  function novoNomeValido() {
    if (nome.length > 0) {
      const contatosSemMesmoID = contatos.itens.filter((c) => c.id !== id);
      if (
        contatosSemMesmoID.find(
          (c) => c.nomeCompleto.toLocaleLowerCase() === nome.toLocaleLowerCase()
        ) === undefined
      )
        return true;
      else return false;
    } else {
      return false;
    }
  }

  const dispatch = useDispatch();

  return (
    <S.Card>
      <form>
        <h3>
          <input
            type="text"
            value={nome}
            disabled={!estaEditando}
            onChange={({ target }) => setNome(target.value)}
            placeholder="Nome Completo"
          />
        </h3>
        <div>
          <label htmlFor={`email-${id}`}>
            <Icone icone="mail" />
          </label>
          <input
            id={`email-${id}`}
            type="mail"
            disabled={!estaEditando}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="E-mail"
          />
        </div>
        <div>
          <label htmlFor={`telefone-${id}`}>
            <Icone icone="phone" />
          </label>
          <input
            id={`telefone-${id}`}
            type="tel"
            value={telefone}
            disabled={!estaEditando}
            onChange={({ target }) => setTelefone(target.value)}
            placeholder="Telefone"
          />
        </div>
      </form>
      {estaEditando ? (
        <S.Group>
          <OutlineButton onClick={() => salvarEdicao()}>
            <Icone icone="save" />
          </OutlineButton>
          <DangerOutlineButton onClick={descartarAlteracoes}>
            <Icone icone="close" color="danger" />
          </DangerOutlineButton>
        </S.Group>
      ) : (
        <S.Group>
          <OutlineButton onClick={() => alterarEstadoEdicao()}>
            <Icone icone="edit" />
          </OutlineButton>
          <DangerOutlineButton onClick={() => dispatch(remover(id))}>
            <Icone icone="delete" color="danger" />
          </DangerOutlineButton>
        </S.Group>
      )}
    </S.Card>
  );
};

export default CardContato;
