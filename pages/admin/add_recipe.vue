<template>
  <div class="container-fluid">
    <h1>Добавить новый рецепт</h1>
    <form class="row g-3" @submit.prevent="submitForm">
      <div class="col-12 col-lg-8 mb-3">
        <h3 class="form-label">Название рецепта</h3>
        <input id="title" type="text" class="form-control" placeholder="торт" v-model="dataInput.title">
      </div>

      <div class="col-12 col-lg-8 mb-3">
        <h3 class="form-label">время готовки</h3>
        <input id="cooking-time" type="text" class="form-control" placeholder="1 час 30 минут" v-model="dataInput.cookingTime">
      </div>

      <div class="col-12 col-lg-8 mb-3">
<!--        <h3 class="form-label">Главное изображение</h3>-->
<!--        <input id="title-img" type="file" class="form-control">-->
        <input type="text" class="form-control" v-model="dataInput.img">
      </div>
      <h3>Этапы готовки</h3>
      <div style="padding-left: 2rem" v-for="(_, idx) in dataInput.steps" :key="idx">
        <input-steps
          :idx="idx"
          @stepDescription="setStepDescription"
        />
      </div>

      <div style="padding-left: 2rem" class="col-12 col-lg-8">
        <button class="btn btn-danger" @click.prevent="removeStep">-</button>
        <button class="btn btn-primary" @click.prevent="addStep">+</button>
      </div>

      <div class="col-12 col-lg-8 mb-3">
        <h3 class="form-label">Описание рецепта</h3>
        <textarea cols="30" rows="10" v-model="dataInput.description" class="form-control"></textarea>
      </div>

      <div class="col-12 col-lg-8 mb-3">
        <h3 class="form-label">Категория</h3>
        <select class="form-select" v-model="dataInput.category" aria-label="Default select example">
          <option value="" selected>Выберите категорию</option>
          <option value="61b99fcd97e56e7576ddf2ba">Торты</option>
          <option value="61b9a05a97e56e7576ddf34b">Мини десерты</option>
          <option value="61b9a06497e56e7576ddf34d">Макароны</option>
          <option value="61b9a06e97e56e7576ddf34f">Начинки</option>
          <option value="61b9a0c897e56e7576ddf351">Декор</option>
        </select>
      </div>

      <div class="col-12 col-lg-8 mb-3">
        <label class="form-label">Теги</label>
        <input type="text" class="form-control" v-model="dataInput.tags" placeholder="торт, вкусняшка, карамель">
      </div>

      <h3>Ингредиенты</h3>
      <div style="padding-left: 2rem" class="col-12 col-lg-8">
        <input-ingredients
          v-for="(_, idx) in dataInput.ingredients"
          :key="idx"
          :idx="idx"
          @iTitle="setITitle"
          @iCount="setICount"
          @ICountTitle="setICountTitle"
        />
      </div>

      <div class="col-12 col-lg-8 mb-3">
        <button class="btn btn-danger" @click.prevent="removeIngredient">-</button>
        <button class="btn btn-primary" @click.prevent="addIngredient">+</button>
      </div>
      <div class="col-12 col-lg-8">
        <button class="btn btn-mm" type="submit">создать</button>
      </div>
    </form>
  </div>
</template>

<script>


export default {
  layout: 'admin',
  async middleware({app, res , redirect, $axios, $cookies}) {
    app.store.getters['auth/isAuthenticated'] ? '' : redirect('/')

    await $axios.post('https://annabaker.ru/api/v1/auth/check', {}, {
      headers: {
        Authorization: `Bearer ${$cookies.get('jwt-token')}`
      }
    }).catch(i => {
      app.store.commit('auth/logout')
      redirect('/')
    })
  },
  data: () => ({
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
      tags: '',
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
  }),
  methods: {
    addStep() {
      this.dataInput.steps.push({ img: '', description: '' })
    },
    removeStep() {
      if (this.dataInput.steps.length > 1) {
        this.dataInput.steps.pop()
      }
    },
    addIngredient() {
      this.dataInput.ingredients.push({ title: '', amount: 0, typeAmount: 'г' })
    },
    removeIngredient() {
      if (this.dataInput.ingredients.length > 1) {
        this.dataInput.ingredients.pop()
      }
    },
    async submitForm () {
      this.dataInput.tags = this.dataInput.tags.split(',').map(i => i.trim())
      const res = await this.$axios.post('https://annabaker.ru/api/v1/recipe',  this.dataInput, {
        headers: {
          Authorization: `Bearer ${this.$cookies.get('jwt-token')}`
        },
      })
      console.log(res)
    },
    setStepDescription(data, idx) {
      this.dataInput.steps[idx].description = data
    },
    setITitle(data, idx) {
      this.dataInput.ingredients[idx].title = data
    },
    setICount(data, idx) {
      this.dataInput.ingredients[idx].amount = parseInt(data)
    },
    setICountTitle(data, idx) {
      this.dataInput.ingredients[idx].typeAmount = data
    }
  },


  created () {
  }
}
</script>
