export const state = function () {
  return {
    recipes: [],
    nowRecipe: {}
  }
}

export const actions = {
  async fetchRecipes ({ state, commit }) {
    const res = await this.$axios.get('https://annabaker.ru/api/v1/recipe/')
    commit('setRecipes', res.data)
  },
  async fetchNowRecipe ({ state, commit }, id) {
    const res = await this.$axios.get(`https://annabaker.ru/api/v1/recipe/${id}`)
    commit('setNowRecipe', res.data)
  }
}

export const mutations = {
  setRecipes (state, recipes) {
    state.recipes = recipes.reverse()
  },
  setNowRecipe (state, recipe) {
    state.nowRecipe = recipe
  },
  getLikeToRecipe (state, id) {
    state.recipes.forEach((i) => {
      if (i._id === id) {
        i.likes++
      }
    })
  },
  setDate (arr) {
    const date = new Date(arr.date * 1000)
    const newDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    arr.date = newDate
  },
  changeDate (state, id, date) {
    state.recipes.forEach((i) => {
      if (i._id === id) {
        i.date = date
      }
    })
  }
}

export const getters = {
  getRecipes (state) {
    return state.recipes
  },
  boolianRecipe (state) {
    return !!state.recipes.length
  },
  getNowRecipe (state) {
    return state.nowRecipe
  }
}
