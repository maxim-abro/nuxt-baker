<template>
  <h1>Поиск по тегу</h1>

</template>

<script>

export default {
  layout: 'default',
  fetch ({ state, route}) {
    console.log(route.query)
  }
}
</script>
