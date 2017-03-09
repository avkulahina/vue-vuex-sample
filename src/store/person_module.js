const person_module {
  state: {
    name: 'Wisarut Phuvanantanond'
  },
  mutations: {
    SET_NAME (state, name) {
      state.name = name
    }
  },
  actions: {
    setName ({ commit, state }, name) {
      commit('SET_NAME', name)
    }
  },
  getters: {
    getName (state) {
      return state.name
    }
  }
}

export default person_module