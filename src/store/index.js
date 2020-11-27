import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.store'
import example from './example.store'

Vue.use(Vuex)

const store = new Vuex.Store({
  debug: false,
  modules: {
    app,
    example
  }
})

export default store
