import { getData, postData } from "./http";
import { ITransactions } from "../@types/transactions";

export async function apiGetTransactions() {
  const response = await getData("transactions");
  return response;
}

export async function apiCreateNewTransaction(data: ITransactions) {
  const newTransaction = await postData("transactions", data);
  return newTransaction;
}
