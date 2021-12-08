<template>
  <div style="top: 0" class="position-sticky">
    <div class="card mb-3 shadow" style="margin-right: 0">
      <h2 class="m-1">Категории</h2>

      <hr class="mb-0"/>

      <div class="container-fluid p-0">
        <div class="list-group">
          <a href="#" @click.prevent="getCat('6197876df838a519add44bee')" class="list-group-item list-group-item-action custom-link border-0">Торты</a>
          <a href="#" @click.prevent="getCat('619787a0f838a519add44bf1')" class="list-group-item list-group-item-action custom-link border-0">Мини десерты</a>
          <a href="#" @click.prevent="getCat('619787b6f838a519add44bf4')" class="list-group-item list-group-item-action custom-link border-0">Макароны</a>
          <a href="#" @click.prevent="getCat('619787bef838a519add44bf6')" class="list-group-item list-group-item-action custom-link border-0">Начинки</a>
          <a href="#" @click.prevent="getCat('619787c4f838a519add44bf8')" class="list-group-item list-group-item-action custom-link border-0">Декор</a>
        </div>
      </div>
    </div>

    <div class="card mb-3 shadow" style="margin-right: 0">
      <h2 class="m-1">Теги</h2>

      <hr  class="mb-0"/>

      <div class="container-fluid p-1">
        <nuxt-link
          v-for="(i, idx) in $store.getters['tags/getTags']"
          class="link-mm text-decoration-none"
          :key="idx"
          :to="`/search-/${i._id}`"
        >
          {{ `#${i.title}${idx !== $store.state.tags.tags.length - 1 ? ',' : ''}` }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getCat(name) {
      this.$router.push({
        query: {
          name: name,
          page: 1
        },
        path: '/search'
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .custom-link {
    display: block;
    margin: auto;
    padding: 1rem 1.25rem;
    font-family: sans-serif;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    position: relative;
    transition: all .3s cubic-bezier(.2, 0, 0, 1);
    z-index: 1;

    &:after {
      content: '';
      display: block;
      height: 0px;
      position: absolute;
      bottom: 0;
      right: 1.25rem;
      left: 1.25rem;
      background-color: #ad5472;
      transition: all .3s cubic-bezier(.2, 0, 0, 1);
      transform-origin: bottom center;
      z-index: -1;
    }

    &:hover {
      color: #ffffff;

      &:after {
        right: 0;
        left: 0;
        height: 100%;
      }
    }
  }

  hr {
    border: none;
    border-bottom: 3px solid #ad5472;
  }
</style>
