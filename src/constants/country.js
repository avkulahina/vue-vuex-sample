const mutations = {
  GET_COUNTRY_REQUEST: 'GET_COUNTRY_REQUEST',
  GET_COUNTRY_SUCCESS: 'GET_COUNTRY_SUCCESS',
  GET_COUNTRY_FAILURE: 'GET_COUNTRY_FAILURE'
}

export const actions = {
  GET_COUNTRY: 'getCountry'
}

export const MODULE = 'Country'

Object.freeze(mutations)
Object.freeze(actions)

export default mutations
