import styled from "styled-components";

export const Card = styled.li`
  background-color: #fff;
  box-shadow: 0 8px 6px 1px rgba(0, 0, 0, 0.1),
    0 1px 2px 0px rgba(0, 0, 0, 0.08);
  //box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 15px 0;
  padding: 8px 16px;
  border-bottom-width: 0px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 15px;
  align-items: center;

  & form {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    grid-column-gap: 15px;
    align-items: center;

    & h3 {
      min-width: 360px;
    }

    & label {
      display: inline;
      width: auto;
    }

    & input {
      border-color: #454545;
      display: inline;
      margin-bottom: 0;
    }

    & input:disabled {
      background-color: #fff;
      border-color: #fff;
    }

    & div {
      display: flex;
      align-items: center;
    }
  }

  &:last-child {
    border-width: 1px;
  }

  h3 {
    text-transform: uppercase;
    padding-bottom: 8px;
  }

  p {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
  }

  span {
    margin-right: 8px;
  }
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
`;
