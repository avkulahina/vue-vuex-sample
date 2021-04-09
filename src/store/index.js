import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'
import Location from './location.module'
import Country from './country.module'
import {MODULE as LOCATION_MODULE} from '../constants/location'
import {MODULE as COUNTRY_MODULE} from '../constants/country'

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  [LOCATION_MODULE]: Location,
  [COUNTRY_MODULE]: Country
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules,
  // this is a usefull logger plugin
  // when you open a browser console you will see actions/mutations printed
  // so you can debug easier
  plugins: [ createLogger() ]
})
