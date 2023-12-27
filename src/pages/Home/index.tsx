import { Link } from "react-router-dom";

import { Container, LinkButton, MainContainer } from "../../styles";
import ListaContato from "../../containers/ListaContatos";

const Home = () => (
  <>
    <header>
      <Container>
        <h1>Meus contatos</h1>
        <LinkButton as={Link} to="/contato">
          Novo contato
        </LinkButton>
      </Container>
    </header>

    <MainContainer>
      <ListaContato />
    </MainContainer>
  </>
);

export default Home;
