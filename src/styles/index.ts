import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";
import { Link } from "react-router-dom";

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body{
  font-size: 16px;
  background-color: #fefefe;
  color: #454545;
}



label, input {
  display: block;
  width: 100%;
}

label{
  margin-bottom: 4px;
}

input {
  padding: 8px;
  margin-bottom: 16px;
  border:1px solid #ccc;
  font-size: 1.2em;
}

header{
  display: flex;
  flex-direction: row;
  grid-column-gap: 30px;
  position: fixed;
  background-color: rgba(255,255,255,0.96);
  box-shadow: 0 -8px 16px 0 black;
  width: 100%;
  padding: 8px;
  top: 0;
  left: 0;

  & > div
  {
    display: flex;
    grid-gap: 30px;
    align-items: center;
  }

& a{
  text-decoration: none;
  
}

& a:visited{
  color: ${variaveis.primary}
}
}
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`;

export const MainContainer = styled(Container)`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  margin-top: 96px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${variaveis.primary};
  color: #fff;
  padding: 8px 16px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  min-height: 42px;
  cursor: pointer;
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${variaveis.primary};
  color: ${variaveis.primary};
`;

export const DangerOutlineButton = styled(OutlineButton)`
  border-color: ${variaveis.danger};
  color: ${variaveis.danger};
`;

export const LinkButton = styled(Link)`
  background-color: ${variaveis.primary};
  color: #fff;
  padding: 12px 16px;
  font-size: 1.2em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:visited {
    color: #fff;
  }
`;

export default EstiloGlobal;
