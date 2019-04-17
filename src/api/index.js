import axios from "axios";
import { BASE_URL } from "../setting";

function get(url, params) {
  return axios
    .get(url, params)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function getToken(params) {
  const URL = `${BASE_URL}/token`;
  const res = await get(URL, params);
  return res.data;
}

export async function postUser(params) {
  // 今回はPOSTではなく、GETでダミーのレスポンスを取得
  const URL = `${BASE_URL}/post`;
  const res = await get(URL, params);
  if (!res.data.Success) {
    throw new Error("NG!");
  }
  return res.data;
}
