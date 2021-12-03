<template>
<div class="card shadow">
  <h1 class="card-title mx-3">{{ $store.state.recipes.nowRecipe.title }}</h1>

  <hr />
  <div class="card-body d-flex flex-column align-items-center">
    <img class="mb-3" :src="$store.state.recipes.nowRecipe.img" :alt="$store.state.recipes.nowRecipe.title">
    <p class="card-text">{{ $store.state.recipes.nowRecipe.description }}</p>
    <h3 class="mb-3">Ингредиенты</h3>
    <table class="table table-striped mb-5">
      <tbody>
        <tr v-for="(item, idx) in $store.state.recipes.nowRecipe.ingredients" :key="idx">
          <td>{{ item.title }}</td>
          <td>{{ `${item.amount} ${item.typeAmount}` }}</td>
        </tr>
      </tbody>
    </table>
    <div class="mb-5">
      <h3 class="mb-3">Пошаговый рецепт</h3>
      <div class="step mb-3" v-for="(item, idx) in $store.state.recipes.nowRecipe.steps" :key="idx">
        <h5 class="mb-0">Шаг {{ idx + 1 }}</h5>
        <div class="title">{{ item.description }}</div>
      </div>
    </div>
    <div class="tags mb-3">
      <span class="badge bg-mm mx-1" v-for="(item, idx) in $store.state.tags.nowTags" :key="idx">#{{ item[0].title }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    titleData: ''
  }),
  head: {
    title: 'annabaker.ru рецепты от Анны.'
  },
  async fetch ({ store, params }) {
    await store.dispatch('recipes/fetchNowRecipe', params.id)
    if (!store.state.tags.tags.length) {
      await store.dispatch('tags/fetchTags')
    }
    store.commit('tags/setNowTags', store.state.recipes.nowRecipe.tags)
    this.head.title = `${store.state.recipes.nowRecipe.title} | annabaker.ru рецепты от Анны.`
  }
}
</script>

<style scoped lang="scss">
  .step,
  .tags {
    width: 100%;
  }
  img {
    max-width: 100%;
  }
  .badge {
    &:hover {
      cursor: pointer;
    }
  }
</style>
