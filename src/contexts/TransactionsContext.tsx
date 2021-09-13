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
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    const totalIncomeCalculated =
      transactions.length > 0
        ? transactions
            .map((transaction) => transaction.amount)
            .reduce((acc, cur) => acc + cur, 0)
        : 0;
    setTotalIncome(totalIncomeCalculated);
  }, [transactions]);

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

  console.log(totalIncome);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction, totalIncome }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
