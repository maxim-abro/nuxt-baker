<template>
  <div class="col-8">
    <h5>Этап {{ idx + 1 }}</h5>
    <div class="mb-2">
      <label class="form-label">Изображение {{ idx + 1 }}</label>
      <input type="file" class="form-control">
    </div>

    <div class="mb-2">
      <label class="form-label">Описание {{ idx + 1 }}</label>
      <input @input="input" type="text" class="form-control" placeholder="ваше описание">
    </div>
    <hr  class="mb-0"/>
  </div>
</template>

<script>
export default {
  props: {
    idx: {
      type: Number,
      default: 0
    }
  },
  methods: {
    input(e) {
      this.$emit('stepDescription', e.target.value, this.idx)
    }
  }
}
</script>
