import axios from "axios";
import { BASE_URL } from "../shared";

export const fetchBaseData = async (url = BASE_URL) => {
  const { data: { Data: data } } = await axios.get(url);
  return data;
};

export const fetchCryptoCurrencyData = async (cryptoCurrency, currency) => {
  const { data: { DISPLAY: data } } = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`)
  return data;
};
