<template>
  <div class="container-fluid p-0">
    <h1 style="margin-bottom: 2rem">Последние рецепты</h1>
    <div class="row row-cols-sm-2 row-cols-lg-3 row-cols-1 g-sm-2 g-0">
      <Card
        v-for="(item, idx) in $store.getters['recipes/getRecipes']"
        :arr="item"
        :id="idx"
        :key="idx"
        @like="likeCount"
        @changeDate="changeDate"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Главная | annabaker.ru рецепты от Анны.'
  },
  data () {
    return {
      dateCards: []
    }
  },
  async fetch ({ store }) {
    if (!store.getters['recipes/boolianRecipe']) {
      await store.dispatch('recipes/fetchRecipes')
    }
    if (!store.state.tags.tags.length) {
      await store.dispatch('tags/fetchTags')
    }
  },
  methods: {
    async likeCount (l, id) {
      this.$store.commit('recipes/getLikeToRecipe', id)
      const arr = this.$store.getters['recipes/getRecipes']
      const nowArr = arr.filter(i => i._id === id)
      await this.$axios.put(`https://annabaker.ru/api/v1/recipe/${id}`, nowArr[0])
    },
    changeDate (d, id) {
      this.$store.commit('recipes/changeDate', d, id)
    }
  }
}
</script>
