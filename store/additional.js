import queryString from 'query-string'

export const state = () => ({
  testimonies: [],
  supporters: [],
  gallery: []
})

export const getters = {
  testimonies(state) {
    return state.testimonies
  },
  supporters(state) {
    return state.supporters
  },
  gallery(state) {
    return state.gallery
  }
}

export const mutations = {
  SET_TESTIMONIES(state, testimonies) {
    state.testimonies = testimonies
  },
  SET_SUPPORTERS(state, supporters) {
    state.supporters = supporters
  },
  SET_GALLERY(state, gallery) {
    state.gallery = gallerygallery
  }
}

export const actions = {
  async getTestimonies({ commit }, query) {
    let response = await this.$axios.$get(`api/testimony?${queryString.stringify(query)}`)

    commit('SET_TESTIMONIES', response.data)
  },
  async getSupporters({ commit }, query) {
    let response = await this.$axios.$get(`api/supporter?${queryString.stringify(query)}`)

    commit('SET_SUPPORTERS', response.data)
  },
  async getGallery({ commit }, query) {
    let response = await this.$axios.$get(`api/gallery?${queryString.stringify(query)}`)

    commit('SET_GALLERY', response.data)
  }
}
