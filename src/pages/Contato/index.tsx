import { FormEvent, useState } from "react";

import { useDispatch } from "react-redux";

import { adicionar } from "../../store/reducers/contatos";

import Icone from "../../components/Icone";
import { Button, Container, MainContainer, OutlineButton } from "../../styles";
import { Link, useNavigate } from "react-router-dom";

const Contato = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault();
    dispatch(
      adicionar({
        nomeCompleto: nome,
        email,
        telefone,
      })
    );
    navigate("/");
  };

  return (
    <>
      <header>
        <Container>
          {/* <a href="/"> */}
          <OutlineButton as={Link} to="/">
            <Icone icone="arrow_back" color="primary" />
          </OutlineButton>
          {/* </a> */}
          <h1>Novo contato</h1>
        </Container>
      </header>
      <MainContainer>
        <form onSubmit={adicionarContato}>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            required
          ></input>
          <label>E-mail</label>
          <input
            type="mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          ></input>
          <label>Telefone</label>
          <input
            type="tel"
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
          ></input>

          <Button>Salvar</Button>
        </form>
      </MainContainer>
    </>
  );
};

export default Contato;
