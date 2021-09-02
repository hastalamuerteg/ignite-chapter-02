import { Container } from "./styles";
import { useEffect, useState } from "react";
import { apiGetTransactions } from "../../../src/services/api";
import { format } from "date-fns";

interface ITransactions {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  useEffect(() => {
    async function getTransactions() {
      try {
        const receivedTransactions = await apiGetTransactions();
        setTransactions(receivedTransactions);
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
                {transactions.type === "withdrawal" ? "-" : ""}R$
                {transactions.amount}
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
