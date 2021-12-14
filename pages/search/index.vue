<template>
  <div class="wrap">
    <div class="card shadow p-3 mb-3">
      <div class="row">

        <div class="col-12 col-lg-4 mb-3 col-lg-0">
          <input type="search" class="form-control" v-model="q" placeholder="поиск">
        </div>

        <div class="col-6 col-lg-4">
          <select class="form-select" v-model="type">
            <option value="name">по имени</option>
            <option value="tag">по тегу</option>
            <option value="category">по категории</option>
          </select>
        </div>

        <div class="col-6 col-lg-4 d-flex justify-content-end">
          <button class="btn btn-mm" @click="searchProducts(q, type)">найти</button>
        </div>

      </div>
    </div>



    <div class="row row-cols-1 row-cols-lg-3" v-if="!searchReq.length">

      <div class="col">
        <card :arr="searchReq"/>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-3" v-else>
      <div class="col"v-for="item in searchReq">
        <card :arr="item"/>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-3" v-if="!searchReq">
      <h1>Товары не найдены</h1>
    </div>

  </div>
</template>

<script>

export default {
  layout: 'default',
  async asyncData({route, state, $axios}) {
    const req = await $axios.get(`http://annabaker.ru/api/v1/search?q=${encodeURIComponent(route.query.q)}&type=${route.query.type}`)

    return {
      searchReq: req.data,
      q: route.query.q,
      type: route.query.type
    }
  },
  data() {
    return {
      searchReq: null,
      q: '',
      type: ''
    }
  },
  methods: {
    async searchProducts(q, type) {
      const req = await this.$axios.get(`http://annabaker.ru/api/v1/search?q=${encodeURIComponent(q)}&type=${type}`)
      this.searchReq = req.data
    }
  },
  watch: {
    '$route.query'(query) {
      this.searchProducts(query.q, query.type)
    }
  }
}
</script>
