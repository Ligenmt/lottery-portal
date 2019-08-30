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
      <div class="result">
        <p>第1,2位</p>
        <div v-for="item in resultArray12">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(1, 2, item.result)" style="margin: 10px;">
          </div>
        </div>
        <p>第1,3位</p>
        <div v-for="item in resultArray13">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(1, 3, item.result)" style="margin: 10px;">
          </div>
        </div>
        <p>第1,4位</p>
        <div v-for="item in resultArray14">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(1, 4, item.result)" style="margin: 10px;">
          </div>
        </div>
        <p>第2,3位</p>
        <div v-for="item in resultArray23">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(2, 3, item.result)" style="margin: 10px;">
          </div>
        </div>
        <p>第2,4位</p>
        <div v-for="item in resultArray24">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(2, 4, item.result)" style="margin: 10px;">
          </div>
        </div>
        <p>第3,4位</p>
        <div v-for="item in resultArray34">
          <div v-if="item.active">
            <span>期号:{{item.no}}  号码: {{item.result}}</span><input type="checkbox" @click="check(3, 4, item.result)" style="margin: 10px;">
          </div>
        </div>
      </div>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button type="primary" @click="onSubmitFilt">二次计算</mt-button>
      </div>
      <div>
         <span v-for="item in filtResult" style="margin: 2px;">
        {{item}}
      </span>
      </div>

    </div>
</template>

<script>
    import {abxxn, abxxnFilt} from "../../api/api";
    import Axios from 'axios'

    export default {
        name: "abxxn",
        data() {
          return {
            result: '',
            filtResult: [],
            count: '',
            code: '',
            resultArray12: [],
            resultArray13: [],
            resultArray14: [],
            resultArray23: [],
            resultArray24: [],
            resultArray34: [],
            filterArray: [],
          }
        },
      methods: {
          onSubmit() {
            let params = {
              code: this.code,
              count: this.count,
            }
            abxxn(params).then(res=>{
              let result = res.data
              for (let resultArray of result) {
                for (let item of resultArray) {
                  item['active'] = true
                }
              }
              this.resultArray12 = result[0]
              this.resultArray13 = result[1]
              this.resultArray14 = result[2]
              this.resultArray23 = result[3]
              this.resultArray24 = result[4]
              this.resultArray34 = result[5]
            })
          },

        onSubmitFilt() {
          let params = {
            filterArray: this.filterArray,
          }
          abxxnFilt(params).then(res=>{
            let result = res.data
            this.filtResult = result
          })
        },
        check(a, b, result) {
          console.log("check", a, b, result)
          this.filterArray.push({
            a: a,
            b: b,
            result: result,
          })
        }
      }
    }
</script>

<style scoped>
  .result {
    padding: 10px;
  }
</style>
