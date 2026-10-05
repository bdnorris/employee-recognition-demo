import { createStore } from 'vuex'
import nominees from './modules/nominees'
import traits from './modules/traits'

export default createStore({
  modules: {
    nominees,
    traits
  }
})