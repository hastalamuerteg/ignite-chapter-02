import Modal from "react-modal";
import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton,
} from "./styles";
import closeModalImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  NewTransactionModalProps,
  Transaction,
} from "../../@types/transactions";
import { useTransactions } from "../../hooks/useTransactions";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createNewTransaction } = useTransactions();
  const [transactionType, setTransactionType] =
    useState<Transaction>("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  //Create a new transaction
  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    try {
      const newTransaction = {
        title: title,
        amount: transactionType === "withdrawal" ? -amount : amount,
        type: transactionType,
        category: category,
      };
      await createNewTransaction(newTransaction);
    } catch (err) {
      console.log(err);
    }
    clearFormInputs();
    onRequestClose();
  }

  function handleInputTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }
  function handleInputValueChange(e: ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.currentTarget.value));
  }
  function handleInputCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.currentTarget.value);
  }

  function handleDeposit() {
    setTransactionType("deposit");
  }

  function handleWithdrawal() {
    setTransactionType("withdrawal");
  }

  function clearFormInputs() {
    setTitle("");
    setAmount(0);
    setCategory("");
    setTransactionType("deposit");
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          type="text"
          placeholder="Título"
          onChange={handleInputTitleChange}
          value={title}
        />
        <input
          type="number"
          placeholder="Valor"
          onChange={handleInputValueChange}
          value={amount}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            isActive={transactionType === "deposit"}
            activeColor="green"
            onClick={handleDeposit}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            activeColor="red"
            isActive={transactionType === "withdrawal"}
            onClick={handleWithdrawal}
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          onChange={handleInputCategoryChange}
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
