<template>
  <div class="container">
    <form @submit.prevent="$store.dispatch('auth/fetchAuth', inputData)">
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
  })
}
</script>
