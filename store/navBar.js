export const state = function () {
  return {
    isShow: false
  }
}

export const mutations = {
  toggleShow: state => state.isShow = !state.isShow
}

export const getters = {
  getIsShow: state => state.isShow
}

export const actions = {

}
