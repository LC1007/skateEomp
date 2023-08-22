import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'


export default createStore({
  state: {
    skateboards: null,
    trucks: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    },
    setTrucks(state, data){
      state.trucks = data
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
    }
  },
  modules: {
  }
})
