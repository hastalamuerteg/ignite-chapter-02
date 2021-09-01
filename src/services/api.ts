import { getData } from "./http";

export async function apiGetTransactions() {
  const response = await getData("transactions");
  return response;
}
