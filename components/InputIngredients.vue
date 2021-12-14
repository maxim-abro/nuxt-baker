<template>
  <div class="col-12 col-lg-8">
    <h5>Ингредиент №{{ idx + 1 }}</h5>
    <div class="mb-2">
      <label class="form-label">Название ингредиента №{{ idx + 1 }}</label>
      <input type="text" @input="$emit('iTitle', $event.target.value, idx)" class="form-control" placeholder="Сахар">
    </div>

    <div class="mb-2">
      <label class="form-label">Количество ингредиента №{{ idx + 1 }}</label>
      <input type="number" @input="$emit('iCount',$event.target.value, idx)" class="form-control" placeholder="100">
    </div>

    <div class="mb-2">
      <label class="form-label">Тип №{{ idx + 1 }}</label>
      <input type="text" @input="$emit('iCountType', $event.target.value, idx)" class="form-control" placeholder="г">
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
  }
}
</script>
