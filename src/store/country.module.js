import mutations, { actions } from '../constants/country'
import getCountry from '../services/country'

const countryModule = {
  namespaced: true,
  state: {
    country: null,
    loading: false
  },
  mutations: {
    [mutations.GET_COUNTRY_SUCCESS] (state, country) {
      state.country = country
      state.loading = false
    },
    [mutations.GET_COUNTRY_REQUEST] (state) {
      state.loading = true
    },
    [mutations.GET_COUNTRY_FAILURE] (state) {
      state.loading = false
    }
  },
  actions: {
    async [ actions.GET_COUNTRY ] ({ commit }, {lon, lat}) {
      commit(mutations.GET_COUNTRY_REQUEST) // before async call, will set loading to true
      try {
        // TODO: some async call here using lat ann lon
        const country = await getCountry({lon, lat})
        // commit the result if successfull
        commit(mutations.GET_COUNTRY_SUCCESS, country)
      } catch (e) {
        commit(mutations.GET_COUNTRY_FAILURE)
        // some other actions, like showing error toast
      }
    }
  },
  getters: {
    getCountryString (state) {
      return state.country
    },
    isLoading (state) {
      return state.loading
    }
  }
}

export default countryModule
