export const state = () => ({
  searchByTag: []
})

export const mutations = {

}

export const actions = {
  async getSearch(name, type) {
    const data = await this.$axios.get(`http://annabaker.ru/api/v1/search?q=${name}&type=${type}`)
    console.log(data)
  }
}


export const getters = {}
