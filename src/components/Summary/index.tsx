import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const { summaryTotal, summaryIncome, summaryOutcome } = useContext(TransactionsContext);

  function formatCurrency(value: number) {
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: 'currency',
      currency: 'BRL'
    }).format(value);

    return formattedValue;
  }


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
         {formatCurrency(summaryIncome)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{formatCurrency(summaryOutcome)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(summaryTotal)}</strong>
      </div>
    </Container>
  );
}
