export interface ITransactions {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export type Transaction = "deposit" | "withdrawal";
