<template>
    <div>
      <mt-header title="notsameplus">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <mt-field label="开始期数" placeholder="开始期数" v-model="no"></mt-field>
      <mt-field label="连续多少期m" placeholder="连续多少期m" v-model="m"></mt-field>
      <mt-radio
        title="选择位置"
        v-model="index"
        :options="['1', '2', '3', '4', '5']">
      </mt-radio>
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
    import {notsameplus} from "../../api/api";

    export default {
        name: "notsameplus",
        data() {
          return {
            result: '',
            no: '',
            count: '',
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
              count: this.count,
              index: this.index,
              collection: this.collection,
            }
            notsameplus(params).then(res=>{
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
