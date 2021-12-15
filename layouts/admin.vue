<template>
  <div>
    <Header />
    <main class="main my-3">
      <div class="container p-0">
        <div class="row m-0">
          <div class="col">
            <div class="lay">
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.lay {
  @media screen and (max-width: 992px) {
    margin: 100px 0 0 0;
  }
}
</style>
