import axios from "axios";
export const BASE_URL = "http://localhost:3000/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export async function getData(url: string) {
  const { data } = await axiosInstance.get(url);
  return data;
}
