export const state = () => ({
  dataInput: {
    title: '',
    img: '',
    cookingTime: '',
    steps: [
      {
        img: '',
        description: ''
      },
      {
        img: '',
        description: ''
      },
      {
        img: '',
        description: ''
      }
    ],
    description: '',
    likes: 0,
    category: '',
    tags: [],
    ingredients: [
      {
        title: '',
        amount: 0,
        typeAmount: 'г'
      },
      {
        title: '',
        amount: 0,
        typeAmount: 'г'
      },
      {
        title: '',
        amount: 0,
        typeAmount: 'г'
      }
    ],
    comments: []
  }
})

export const actions = {}

export const mutations = {
  setFormInput: (store, dataInput) => {
    store.state.dataInput = dataInput
  },
  setDataInput (store, type, input) {
    store.state.dataInput[type] = input
  }
}

export const getters = {
  getFormInput: store => store.state.dataInput
}
