<template>
  <div>
    <Header />
    <main class="main my-3">
      <div class="container p-0">
        <div class="row m-0">
          <div class="col-lg-9 col-12 pe-2 ps-2 ps-lg-3">
            <Nuxt />
          </div>
          <div class="mt-3 mt-lg-0 col-lg-3 col-12 ps-2 pe-2 ps-lg-3">
            <Aside />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>

export default {
  beforeMount() {
    if(!this.$store.state.auth.token) {
      this.$store.commit('auth/addLocalStorage')
    }
  }
}
</script>
