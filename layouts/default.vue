<template>
  <div>
    <Header />
    <main class="main my-3">
      <div class="container p-0">
        <div class="row m-0">
          <div class="col-md-9 col-12 pe-0">
            <Nuxt />
          </div>
          <div class="col-md-3 col-12 pe-0">
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
