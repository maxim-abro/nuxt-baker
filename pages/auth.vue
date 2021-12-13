<template>
  <div class="container">

    <form @submit.prevent="pushForm">
      <div class="row mb-3">
        <label class="col-sm-1" for="mail">Почта:</label>
        <div class="col-sm-6">
          <input v-model="inputData.mail" type="email" class="form-control" id="mail"/>
        </div>
      </div>

      <div class="row mb-5">
        <label class="col-sm-1" for="password">Пароль:</label>
        <div class="col-sm-6">
          <input v-model="inputData.password" type="password" class="form-control" id="password"/>
          <small style="color: red;" v-if="$store.getters['auth/getErrorAuth']">{{ $store.getters['auth/getErrorAuth'] }}</small>
        </div>
      </div>

      <div class="row mb-3">
        <button type="submit" class="btn btn-mm col-sm-2">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data: () => ({
    inputData: {
      mail: '',
      password: ''
    }
  }),
  methods: {
    async pushForm() {
      const data = await this.$store.dispatch('auth/fetchAuth', this.inputData)
      if (data !== 200) {
        return
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
