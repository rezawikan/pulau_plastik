import queryString from 'query-string'

export const state = () => ({
  testimonies: []
})

export const getters = {
  testimonies(state) {
    return state.testimonies
  }
}

export const mutations = {
  SET_TESTIMONIES(state, testimonies) {
    state.testimonies = testimonies
  }
}

export const actions = {
  async getTestimonies({ commit }, query) {
    let response = await this.$axios.$get(`api/testimony?${queryString.stringify(query)}`)

    commit('SET_TESTIMONIES', response.data)
  }
}
