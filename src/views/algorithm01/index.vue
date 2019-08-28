<template>
    <div>
      <mt-header title="algorithm01">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <mt-field label="起始期数" placeholder="起始期数" v-model="no"></mt-field>
      <mt-field label="号码" placeholder="号码" v-model="code"></mt-field>
      <mt-field label="M" placeholder="M" v-model="count"></mt-field>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button type="primary" @click="onSubmit">提交</mt-button>
      </div>
      <div class="result" v-html="result">
      </div>
    </div>
</template>

<script>
    import {algorithm01} from "../../api/api";

    export default {
        name: "algorithm01",
        data() {
          return {
            result: '',
            code: '',
            count: '',
            no: '',
          }
        },
      methods: {
          onSubmit() {
            let params = {
              no: this.no,
              code: this.code,
              count: this.count,
            }
            algorithm01(params).then(res=>{
              this.result = res.data
            })
          },
      }
    }
</script>

<style scoped>
  .result {
    padding: 10px;
  }
</style>
