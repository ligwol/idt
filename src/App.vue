<template>
  <div class="main">
    <landing/>
  </div>
</template> 

<script>
import landing from './components/landing.vue'
export default {
  name: 'Page',
  components: {
    landing,
  }
}
</script>

<style lang="scss">
    :root{
      font-family: 'Montserrat', sans-serif;
    }
    *{
      box-sizing: border-box;
      margin: 0;
      scroll-behavior: smooth;
    }
</style>
