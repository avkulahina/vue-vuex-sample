const mutations = {
  GET_LOCATION_REQUEST: 'GET_LOCATION_REQUEST',
  GET_LOCATION_SUCCESS: 'GET_LOCATION_SUCCESS',
  GET_LOCATION_FAILURE: 'GET_LOCATION_FAILURE'
}

export const actions = {
  GET_LOCATION: 'getLocation'
}

export const MODULE = 'Location'

Object.freeze(mutations)
Object.freeze(actions)

export default mutations
