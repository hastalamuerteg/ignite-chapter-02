import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { Dashboard } from "./components/Dashboard/index";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionsContextProvider } from "./contexts/TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsContextProvider>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
      <Header onNewTransactionModalOpen={handleOpenNewTransactionModal} />
      <Dashboard />
    </TransactionsContextProvider>
  );
}

export default App;
