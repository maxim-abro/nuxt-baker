const TOKEN_KEY = 'jwt-token'
const MAIL_KEY = 'mail'
const NAME_KEY = 'name'

export const state = function () {
  return {
    token: '',
    mail: '',
    name: '',
    error: ''
  }
}

export const mutations = {
  setMail (state, mail) {
    state.mail = mail
    this.$cookies.set(MAIL_KEY, mail)
  },
  setName (state, name) {
    state.name = name
    this.$cookies.set(NAME_KEY, name)
  },
  setToken (state, token) {
    state.token = token
    this.$cookies.set(TOKEN_KEY, token)
  },
  logout (state) {
    state.token = null
    this.$cookies.remove(MAIL_KEY)
    this.$cookies.remove(NAME_KEY)
    this.$cookies.remove(TOKEN_KEY)
  },
  setErrorAuth (state, error) {
    state.error = error
  },
  addLocalStorage(state) {
    state.token = this.$cookies.get(TOKEN_KEY)
    state.name = this.$cookies.get(NAME_KEY)
    state.mail = this.$cookies.get(MAIL_KEY)
  }
}

export const actions = {
  async fetchAuth ({ commit }, payload) {
    try {
      const res = await this.$axios.post('http://annabaker.ru/api/v1/auth/login', { ...payload })
      commit('setToken', res.data.accessToken)
      commit('setName', res.data.name)
      commit('setMail', res.data.mail)
      commit('setErrorAuth', '')
      return res.status
    } catch (e) {
      commit('setErrorAuth', e.response.data.message)
      return e.response.status
    }
  }
}

export const getters = {
  token: state => state.token,
  getNameUser: state => state.name,
  isAuthenticated: state => !!state.token,
  getErrorAuth: state => state.error
}
