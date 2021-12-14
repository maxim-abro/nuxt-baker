export const state = function () {
  return {
    tags: [],
    nowTags: []
  }
}

export const actions = {
  async fetchTags ({ commit }) {
    const res = await this.$axios.get('https://annabaker.ru/api/v1/tag')
    commit('setTags', res.data)
  }
}

export const mutations = {
  setTags (state, tags) {
    state.tags = tags
  },
  setNowTags (state, arr) {
    state.nowTags = []
    arr.forEach(function (item) {
      console.log(item)
      state.nowTags.push(state.tags.filter(function (i) {
        return i.title === item.toLowerCase()
      }))
    })
  }
}

export const getters = {
  getTags: state => state.tags
}
