import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeModalImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState("deposit");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react__modal--overlay"
      className="react__modal--content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react__modal--close"
      >
        <img src={closeModalImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button>
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </button>

          <button>
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
