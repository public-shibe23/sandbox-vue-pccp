import { getToken } from "../api";

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
  POST_USER: async ({ commit }) => {
    const token = await getToken();
    commit("SET_ITEMS", res.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
