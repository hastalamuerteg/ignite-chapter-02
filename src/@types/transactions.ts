import { ReactNode } from "react";

export interface ITransactions {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export type TransactionClientInput = Omit<ITransactions, "id" | "createdAt">;

export interface ITransactionsContext {
  transactions: ITransactions[];
  createNewTransaction: (transaction: TransactionClientInput) => Promise<void>;
  summaryTotal: number;
  summaryIncome: number;
  summaryOutcome: number;
}

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type Transaction = "deposit" | "withdrawal";

export interface ITransactionsContextProviderProps {
  children: ReactNode;
}
