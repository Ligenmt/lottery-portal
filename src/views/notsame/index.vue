<template>
  <div>
    <mt-header title="notsame">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="开始期数" placeholder="开始期数" v-model="no"></mt-field>
    <mt-field label="连续多少期m" placeholder="连续多少期m" v-model="m"></mt-field>
    <mt-radio
      title="选择彩种"
      v-model="collection"
      :options="collectionOptions">
    </mt-radio>
    <div style="margin: 0 auto; padding: 10px; text-align: center">
      <mt-button type="primary" @click="onSubmit">提交</mt-button>
    </div>
    <mt-spinner type="fading-circle"></mt-spinner>
    <div class="result" v-html="result">
    </div>
  </div>
</template>

<script>
  import {notsame} from "../../api/api";

  export default {
    name: "notsame",
    data() {
      return {
        result: '',
        no: '',
        m: '',
        index: '1',
        collection: 'cqssc',
        collectionOptions: [
          {
            label: '重庆时时彩',
            value: 'cqssc',
          },
          {
            label: '排列5',
            value: 'pl5'
          },
        ]
      }
    },
    methods: {
      onSubmit() {
        let params = {
          no: this.no,
          m: this.m,
          collection: this.collection,
        }
        notsame(params).then(res=>{
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
