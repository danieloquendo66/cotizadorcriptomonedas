import axios from "axios";
import { BASE_URL } from "../shared";

export const fetchBaseData = async (url = BASE_URL) => {
  const { data: { Data: data } } = await axios.get(url);
  return data;
};
