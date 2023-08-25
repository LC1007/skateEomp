import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://skatehub.onrender.com/'


export default createStore({
  state: {
    skateboards: null,
    users: null,
    trucks: null,
    featuredProds: null,
    selectedProduct: null
  },
  getters: {
  },
  mutations: {
    setSkate(state, data){
      state.skateboards = data
    },
    setUsers(state, data){
      state.users = data
    },
    setTrucks(state, data){
      state.trucks = data
    },
    setFeature(state, data){
      state.featuredProds = data
    },
    setDelete(state, item){
      state.selectedProduct = item
    },
    setSelectedProduct(state, data){
      state.skateboards = data
    }
  },
  actions: {
    async fetchBoards({commit}){
      const fetchedData = await axios.get(`${url}products`)
      commit('setSkate', fetchedData.data.results)
    },
    async fetchUsers({commit}){
      const fetchedData = await axios.get(`${url}users`)
      commit('setUsers', fetchedData.data.results)
    },
    async fetchTrucks({commit}){
      const fetchedTruck = await axios.get(`${url}trucks`)
      commit('setTrucks', fetchedTruck.data.results)
    },
    async fetchFeatured({commit}){
      const fetchedFeatures = await axios.get(`${url}featured`)
      commit('setFeature', fetchedFeatures.data.results)
    },
    async delProduct({commit}, skateID){
      try {
        const response = await axios.delete(`${url}product/${skateID}`)
        location.reload()
        commit('setDelete', response)
      } catch (error) {
        
      }
    },

    async fetchProduct({commit}, skateID){
      try {
        const response = await axios.get(`${url}product/${skateID}`)
        commit('setSelectedProduct', response.data.result[0])
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
