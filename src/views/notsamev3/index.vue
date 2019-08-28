<template>
    <div>
      <mt-header title="notsame v3">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <mt-field label="期号" placeholder="期号" v-model="no"></mt-field>
      <mt-field label="期数" placeholder="期数" v-model="count"></mt-field>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button type="primary" @click="onSubmit">提交</mt-button>
      </div>
      <div class="result" v-html="result">
      </div>
    </div>
</template>

<script>
    import {notsamev3} from "../../api/api";

    export default {
        name: "notsamev3",
        data() {
          return {
            result: '',
            no: '',
            count: '',
          }
        },
      methods: {
          onSubmit() {
            let params = {
              no: '',
              count: '',
            }
            notsamev3(params).then(res=>{
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
