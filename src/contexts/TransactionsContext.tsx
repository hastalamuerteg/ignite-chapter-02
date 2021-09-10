import { createContext, useEffect, useState } from "react";
import {
  ITransactionsContextProviderProps,
  ITransactions,
  TransactionClientInput,
  ITransactionsContext,
} from "../@types/transactions";

import { apiCreateNewTransaction, apiGetTransactions } from "../services/api";
import { getNewId } from "../services/id";

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
);

export function TransactionsContextProvider({
  children,
}: ITransactionsContextProviderProps) {
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

  async function createNewTransaction(
    transactionInput: TransactionClientInput
  ) {
    try {
      const newTransaction: ITransactions = {
        id: getNewId(),
        title: transactionInput.title,
        amount: transactionInput.amount,
        type: transactionInput.type,
        category: transactionInput.category,
        createdAt: new Date(),
      };
      const { transaction } = await apiCreateNewTransaction(newTransaction);

      setTransactions([...transactions, transaction]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
