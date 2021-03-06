import { Container } from "./styles";
import { format } from "date-fns";
import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  return (
    <Container>
      <div>
        <h2>Listagem</h2>
        <p>{transactions.length} itens</p>
      </div>
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
