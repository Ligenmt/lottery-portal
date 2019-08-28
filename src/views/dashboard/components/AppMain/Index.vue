<template>
  <section class="app-main">
    <div class="app-container">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
    export default {
      name: "Index",

      data() {
        return {}
      }
    }

</script>

<style scoped>
  .app-main{
    min-height: 100%
  }

  .app-container {
    /*background-color: #42b983;*/
    padding: 20px;
  }
</style>
