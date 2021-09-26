//import axios from "axios"
import axios from "axios";

export default {
  state: {
    categories: null,
    category: null
  },
  mutations: {
    updateCategories: (state, payload) => {
      state.categories = payload;
    },
    setCategory: (state, payload) => {
      state.category = payload;
    }
  },
  actions: {
    updateCategories: ({ commit }, payload) => {
      commit("updateCategories", payload);
    },
    async fetchCategories(context) {
      const token = await context.rootState.auth.token
      const domain = await context.rootState.auth.user.company.domain

      try {
        const { data: data } = await axios.get(`http://${domain}/api/v1/products/categories`,  {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        console.log(data.data)
        await context.commit("updateCategories", data.data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchCategory(context, id) {
      const token = await context.rootState.auth.token
      const domain = await context.rootState.auth.user.company.domain

      try {
        const { data: data } = await axios.get(`http://${domain}/api/v1/products/categories/${id}`,  {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        context.commit("setCategory", data.data)
        console.log(data.data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  getters: {
    categories: s => s.categories,
    category: s => s.category,
    categoryById: s => id => s.categories.find(t => t.id === id)
  }

}