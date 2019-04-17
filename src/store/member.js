import { getToken, postUser } from "../api";
import merge from "deepmerge";
export const state = {
  products: []
};
export const getters = {
  getAllProducts: state => {
    return state.products;
  }
};
export const mutations = {
  SET_ITEMS: (state, payload) => {
    state.products = payload.products;
  }
};
export const actions = {
  POST_USER: async ({}, payload) => {
    const token = await getToken();
    const params = merge(payload, token);
    const result = await postUser(params);
    return result;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
