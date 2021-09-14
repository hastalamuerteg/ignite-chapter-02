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
  const [summaryIncome, setSummaryIncome] = useState<number>(0);
  const [summaryOutcome, setSummaryOutcome] = useState<number>(0);
  const [summaryTotal, setSummaryTotal] = useState<number>(0);

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
    const totalTransactionsAmount =
      transactions.length > 0
        ? transactions
        .map((transaction) => transaction.amount)
        .reduce((acc, cur) => acc + cur, 0)
        : 0;
        setSummaryTotal(totalTransactionsAmount);

    const totalTransactionsIncome = 
    transactions
    .filter((transaction) => transaction.amount > 0)
    .map((trans) => trans.amount)
    .reduce((acc, cur) => acc + cur, 0);
    setSummaryIncome(totalTransactionsIncome);

    const totalTransactionsOutcome = 
    transactions
    .filter((transaction) => transaction.amount < 0)
    .map((trans) => trans.amount)
    .reduce((acc, cur) => acc + cur, 0);
    setSummaryOutcome(totalTransactionsOutcome);
    
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

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction, summaryTotal, summaryIncome, summaryOutcome }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
