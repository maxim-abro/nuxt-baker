<template>
  <div class="card shadow p-3">
    <div class="d-flex justify-content-between">
      <h1>Все рецепты</h1>
      <button class="btn btn-outline-mm" @click="$router.push('/admin/add_recipe')">новый рецепт</button>
    </div>

    <div class="div overflow-auto">
      <table class="table table-hover overflow-hidden">
        <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>тип</th>
          <th>лайки</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(recipe, idx) in recipes">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ recipe.title }}</td>
          <td>-</td>
          <td>{{ recipe.likes }}</td>
          <td class="d-flex justify-content-end">
            <nuxt-link to="/" class="link-mm">редактировать</nuxt-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

export default {
  layout: 'admin',
  async asyncData({$axios}) {
    const res = await $axios.get('https://annabaker.ru/api/v1/recipe')

    return {
      recipes:res.data
    }
  },
  data() {
    return {
      recipes: null,
      categories: null
    }
  },
  computed: {

  }
}
</script>
