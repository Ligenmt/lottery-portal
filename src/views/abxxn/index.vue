<template>
    <div>
      <mt-header title="abxxn">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <mt-field label="号码" placeholder="号码" v-model="code"></mt-field>
      <mt-field label="数量" placeholder="数量" v-model="count"></mt-field>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button type="primary" @click="onSubmit">提交</mt-button>
      </div>
      <div class="result" v-html="result">
      </div>
    </div>
</template>

<script>
    import {abxxn} from "../../api/api";
    import Axios from 'axios'

    export default {
        name: "abxxn",
        data() {
          return {
            result: '',
            count: '',
            code: '',
          }
        },
      methods: {
          onSubmit() {
            let params = {
              code: this.code,
              count: this.count,
            }
            abxxn(params).then(res=>{
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
