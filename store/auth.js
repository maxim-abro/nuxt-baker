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
    localStorage.setItem(MAIL_KEY, mail)
  },
  setName (state, name) {
    state.name = name
    localStorage.setItem(NAME_KEY, name)
  },
  setToken (state, token) {
    state.token = token
    localStorage.setItem(TOKEN_KEY, token)
  },
  logout (state) {
    state.token = null
    localStorage.removeItem(MAIL_KEY)
    localStorage.removeItem(NAME_KEY)
    localStorage.removeItem(TOKEN_KEY)
  },
  setErrorAuth (state, error) {
    state.error = error
  },
  addLocalStorage(state) {
    state.token = localStorage.getItem(TOKEN_KEY)
    state.name = localStorage.getItem(NAME_KEY)
    state.mail = localStorage.getItem(MAIL_KEY)
  }
}

export const actions = {
  async fetchAuth ({ commit }, payload) {
    try {
      const res = await this.$axios.post('http://annabaker.ru/api/v1/auth/login', { ...payload })
      console.log(res.data)
      commit('setToken', res.data.accessToken)
      commit('setName', res.data.name)
      commit('setMail', res.data.mail)
      commit('setErrorAuth', '')
    } catch (e) {
      console.log(e.response.data.message)
      commit('setErrorAuth', e.response.data.message)
    }
  }
}

export const getters = {
  token: state => state.token,
  getNameUser: state => state.name,
  isAuthenticated: state => !!state.token,
  getErrorAuth: state => state.error
}
