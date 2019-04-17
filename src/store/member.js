import { getToken, postUser } from "../api";
import merge from "deepmerge";
export const state = {};
export const mutations = {};
export const actions = {
  POST_USER: async ({ commit }, payload) => {
    const token = await getToken();
    const params = merge(payload, token);
    const result = await postUser(params);
    return result;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
