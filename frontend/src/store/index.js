import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'


export default createStore({
  state: {
    skateboards: null,
    trucks: null,
    featuredProds: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    },
    setTrucks(state, data){
      state.trucks = data
    },
    setFeature(state, data){
      state.featuredProds = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedData = await axios.get(`${url}products`)
      commit('setSkate', fetchedData.data.results)
    },
    async fetchTrucks({commit}){
      const fetchedTruck = await axios.get(`${url}trucks`)
      commit('setTrucks', fetchedTruck.data.results)
    },
    async fetchFeatured({commit}){
      const fetchedFeatures = await axios.get(`${url}featured`)
      commit('setFeature', fetchedFeatures.data.results)
    }
  },
  modules: {
  }
})
