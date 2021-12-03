export const state = () => ({
  searchByTag: []
})

export const mutations = {
  setSearchByTag (tagId, arr) {
    arr.filter(item => item._id === tagId)
  }
}

export const actions = {}

export const getters = {}
