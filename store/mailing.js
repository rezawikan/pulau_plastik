import queryString from 'query-string'

export const state = () => ({
  // products: [],
})

export const getters = {
  // products (state) {
  //   return state.products
  // }
}

export const mutations = {
  // SET_PRODUCTS(state, products){
  //   state.products = products
  // }
}

export const actions = {
  async screening({ commit }, query) {
    let response = await this.$axios.$get(`api/request-screening?${queryString.stringify(query)}`)
    return response
  },
  async contact({ commit }, query) {
    let response = await this.$axios.$get(`api/request-contact?${queryString.stringify(query)}`)
    return response
  },
  async buying({ commit }, query) {
    let response = await this.$axios.$get(`api/request-buying?${queryString.stringify(query)}`)
    return response
  }
}
