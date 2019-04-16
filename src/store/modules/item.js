import { getAll, createOne, getOne, updateOne, deleteOne } from '@/api/item.js'

const item = {
  namespaced: true,
  state: {
    data: [],
    item: {}
  },
  actions: {
    getAll ({ commit }) {
      return new Promise((resolve, reject) => {
        getAll().then(response => {
          commit('setAll', response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    createOne ({ commit }, data) {
      return new Promise((resolve, reject) => {
        createOne(data).then(response => {
          commit('createOne', response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    getOne ({ commit }, id) {
      return new Promise((resolve, reject) => {
        getOne(id).then(response => {
          commit('setOne', response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    updateOne ({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateOne(data).then(response => {
          commit('setOne', response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    deleteOne ({ commit }, id) {
      return new Promise((resolve, reject) => {
        deleteOne(id).then(() => {
          commit('removeOne', id)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  mutations: {
    setAll (state, data) {
      if (data !== null) {
        state.data = data
      }
    },
    createOne (state, data) {
      if (data !== null) {
        state.data.push(data)
      }
    },
    setOne (state, data) {
      if (data !== null) {
        state.item = data
      }
    },
    removeOne (state, id) {
      if (id !== null) {
        state.data = state.data.filter(item => item._id !== id)
      }
    }
  },
  getters: {
    getAll: (state) => () => {
      return state.data
    },
    getById: (state) => (id) => {
      return state.data.find(s => s._id === id)
    }
  }
}

export default item
