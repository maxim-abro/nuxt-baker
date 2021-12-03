<template>
  <h1>Поиск по тегу</h1>
</template>

<script>

export default {
  layout: 'default',
  fetch ({ state, params }) {
    console.log(params.id)
  }
}
</script>
