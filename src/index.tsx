import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer } from "miragejs";
import { getNewId } from "../src/services/id";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: getNewId(),
          title: "Compra de computador",
          amount: 4500,
          type: "withdrawal",
          category: "Compras",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Desenvolvimento de website",
          amount: 6500,
          type: "deposit",
          category: "Vendas",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Aluguel",
          amount: 1900,
          type: "withdrawal",
          category: "Moradia",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Compra de curso",
          amount: 250,
          type: "withdrawal",
          category: "Cursos",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Compra do mês",
          amount: 600,
          type: "withdrawal",
          category: "Alimentação",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Recebimento de salário",
          amount: 5000,
          type: "deposit",
          category: "Salário",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Livros",
          amount: 350,
          type: "withdrawal",
          category: "Educação",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Jantar",
          amount: 150,
          type: "withdrawal",
          category: "Lazer",
          createdAt: new Date(),
        },
        {
          id: getNewId(),
          title: "Desenvolvimento de website",
          amount: 12000,
          type: "deposit",
          category: "Vendas",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
