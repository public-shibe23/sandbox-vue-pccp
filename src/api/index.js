import axios from "axios";

function get(url, param) {
  return axios
    .get(url, param)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
}

export async function getToken(param) {
  const URL = "http://localhost:3000/token";
  const res = await get(URL, param);
  return res;
}

export async function postUser(params) {
  const token = await getToken();
}
