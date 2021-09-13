import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from "miragejs";
import { getNewId } from "./services/id";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: getNewId(),
          title: "Compra de computador",
          amount: -4500,
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
          amount: -1900,
          type: "withdrawal",
          category: "Moradia",
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
