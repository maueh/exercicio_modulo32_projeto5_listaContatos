import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Contato from "../../models/Contato";

type ContatoLista = {
  itens: Contato[];
};

export const initialState: ContatoLista = {
  itens: [
    {
      nomeCompleto: "Alan F.",
      email: "fulano@foo.com",
      telefone: "(11) 1111-0000",
      id: 1,
    },
    {
      nomeCompleto: "Amanda H.",
      email: "amanda@foo.com",
      telefone: "(11) 1111-0001",
      id: 2,
    },
    {
      nomeCompleto: "Bia M.",
      email: "bia@foo.com",
      telefone: "(11) 1111-0002",
      id: 3,
    },
    {
      nomeCompleto: "Clara S.",
      email: "clara@foo.com",
      telefone: "(11) 1111-0003",
      id: 4,
    },
    {
      nomeCompleto: "Davi J.",
      email: "davi@foo.com",
      telefone: "(11) 1111-0004",
      id: 5,
    },
    {
      nomeCompleto: "Giulia O.",
      email: "giulia@foo.com",
      telefone: "(11) 1111-0005",
      id: 6,
    },
    {
      nomeCompleto: "Elena T.",
      email: "elena@foo.com",
      telefone: "(11) 1111-0006",
      id: 7,
    },
  ],
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato: Contato) => {
        return contato.id !== action.payload;
      });
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, "id">>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nomeCompleto.toLocaleLowerCase() ===
          action.payload.nomeCompleto.toLocaleLowerCase()
      );
      if (contatoJaExiste) {
        alert("Contato já adicionado");
      } else {
        const ultimoContato = state.itens[state.itens.length - 1];
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1,
        };
        state.itens.push(novoContato);
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      state.itens[action.payload.id] = action.payload;
    },
  },
});

export const { remover, adicionar, editar } = contatosSlice.actions;

export default contatosSlice.reducer;
