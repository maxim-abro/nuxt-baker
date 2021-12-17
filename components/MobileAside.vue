<template>
  <div class="mob-wrap">
    <div class="backdrop" v-if="isSidebar" @click="$store.commit('navBar/toggleShow')"></div>

    <button class="btn btn-outline-mm close" v-if="isSidebar" @click="$store.commit('navBar/toggleShow')"><fa class="text-white chevron" icon="times"/></button>
    <transition name="slide-side">
      <div class="mobile-aside bg-mm text-white p-5" v-if="isSidebar">
        <ul class="navbar-nav overflow-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link link-light pl-1" style="padding-right: 0" to="/">
              ГЛАВНАЯ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link link-light pl-1" style="padding-right: 0" to="/recipes">
              РЕЦЕПТЫ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link link-light pl-1" style="padding-right: 0" to="/news">
              НОВОСТИ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link link-light pl-1" style="padding-right: 0" to="/articles">
              СТАТЬИ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link link-light pl-1" style="padding-right: 0" to="/contacts">
              КОНТАКТЫ
            </NuxtLink>
          </li>
        </ul>
        <hr />
        <button v-if="!$store.getters['auth/isAuthenticated']" class="btn btn-light text-mm" @click="$router.push('/auth'); $store.commit('navBar/toggleShow')">войти</button>
        <div class="user-bar" v-else-if="$store.getters['auth/isAuthenticated']">
          <button class="btn btn-mm w-100" @click="$router.push('/admin'); $store.commit('navBar/toggleShow')">панель администратора</button>
          <button class="btn w-100 btn-mm" @click="logout">выйти</button>
        </div>
      </div>
    </transition>


  </div>
</template>

<script>

export default {
  computed: {
    isSidebar() {
      return this.$store.getters['navBar/getIsShow']
    }
  },
  methods: {
    logout() {
      this.$store.commit('navBar/toggleShow')
      this.$store.commit('auth/logout')
      this.$store.commit('auth/addLocalStorage')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .close {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10002;
  }
  .mob-wrap {
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: #00000050;
  }
  .mobile-aside {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 10001;
    width: 300px;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(+100%);
  }
</style>
