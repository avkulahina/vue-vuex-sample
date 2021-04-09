import constants, { actions } from '../constants/location'
import { actions as countryActions, MODULE as COUNTRY_MODULE } from '../constants/country'
import getLocation from '../services/location'

const locationModule = {
  namespaced: true,
  state: {
    lat: null,
    lon: null,
    loading: false
  },
  mutations: {
    [constants.GET_LOCATION_SUCCESS] (state, {lon, lat}) {
      state.lon = lon
      state.lat = lat
      state.loading = false
    },
    [constants.GET_LOCATION_REQUEST] (state) {
      state.loading = true
    },
    [constants.GET_LOCATION_FAILURE] (state) {
      state.loading = false
    }
  },
  actions: {
    async [actions.GET_LOCATION] ({commit, dispatch}) {
      commit(constants.GET_LOCATION_REQUEST) // before async call, will set loading to true
      try {
        // TODO: some async call here;
        const cords = await getLocation()

        // commit the result if successfull
        commit(constants.GET_LOCATION_SUCCESS, cords)
        // send country action after getting cords
        // we need to use { root: true } to make a call from Root store,
        // otherwise Location module actions will be called

        // the same to dispatch('Country/getCountry',....);
        dispatch(`${COUNTRY_MODULE}/${countryActions.GET_COUNTRY}`, cords, { root: true })
      } catch (e) {
        commit(constants.GET_LOCATION_FAILURE)
        // some other actions, like showing error toast
      }
    }
  },
  getters: {
    getLongitude (state) {
      return state.lon
    },
    getLatitude (state) {
      return state.lat
    },
    isLoading (state) {
      return state.loading
    }
  }
}

export default locationModule
