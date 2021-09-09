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
  ITransactions,
  NewTransactionModalProps,
  Transaction,
} from "../../@types/transactions";
import { apiCreateNewTransaction } from "../../services/api";
import { getNewId } from "../../services/id";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] =
    useState<Transaction>("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function clearFormInputs() {
    setTitle("");
    setValue(0);
    setCategory("");
  }

  function handleDeposit() {
    setTransactionType("deposit");
  }

  function handleWithdrawal() {
    setTransactionType("withdrawal");
  }

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    try {
      const newTransaction: ITransactions = {
        id: getNewId(),
        title: title,
        amount: value,
        type: transactionType,
        category: category,
        createdAt: new Date(),
      };
      await apiCreateNewTransaction(newTransaction);
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
    setValue(Number(e.currentTarget.value));
  }
  function handleInputCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.currentTarget.value);
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
          value={value}
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
