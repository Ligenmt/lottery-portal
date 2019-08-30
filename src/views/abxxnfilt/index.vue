<template>
    <div>
      <mt-header title="abxxnfilt">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <div>
         <span v-for="item in filtResult" style="margin: 2px;">
            {{item}}
          </span>
      </div>

    </div>
</template>

<script>

    export default {
        name: "abxxnfilt",
        data() {
          return {
            filtResult: [],
          }
        },

      mounted() {
        let f = localStorage.getItem('abxxnfilt')
        console.log('filt', f)
        this.filtResult = JSON.parse(localStorage.getItem('abxxnfilt'));
        localStorage.clear();
      },
      methods: {
      }
    }
</script>

<style scoped>
  .result {
    padding: 10px;
  }
</style>
