import { Container } from "./styles";
import { useEffect, useState } from "react";
import { apiGetTransactions } from "../../../src/services/api";
import { format } from "date-fns";
import { ITransactions } from "../../@types/transactions";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    async function getTransactions() {
      try {
        const fetchedTransactions = await apiGetTransactions();
        setTransactions(fetchedTransactions.transactions);
      } catch (err) {
        console.log(err);
      }
    }
    getTransactions();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>
                {transactions.type === "withdrawal" ? "-" : ""}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transactions.amount)}
              </td>
              <td>{transactions.category}</td>
              <td>{format(new Date(transactions.createdAt), "dd/MM/yyyy")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
