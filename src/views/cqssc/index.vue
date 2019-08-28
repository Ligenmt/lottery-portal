<template>
    <div>
      <mt-header title="重庆时时彩">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <mt-field label="过滤期数" placeholder="过滤期数" v-model="count"></mt-field>
      <mt-field label="起始期数" placeholder="起始期数" v-model="startNo"></mt-field>
      <mt-radio
        title="过滤位置"
        v-model="remove"
        :options="options">
      </mt-radio>
      <mt-checklist
        title="过滤三位相同"
        v-model="filt"
        :options="['true']">
      </mt-checklist>
      <mt-checklist
        title="过滤两位相同"
        v-model="filt2"
        :options="['true']">
      </mt-checklist>
      <mt-field label="传入号码" placeholder="传入号码" type="textarea" rows="5" v-model="numbers"></mt-field>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button type="primary" @click="onSubmit">提交</mt-button>
      </div>
      <div>
        {{result}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "cqssc",
        data() {
          return {
            result: '',
            count: '',
            startNo: '',
            numbers: '',
            remove: '0',
            options: [
              {
                label: '不过滤',
                value: '0',
              },
              {
                label: '过滤第1位',
                value: '1'
              },
              {
                label: '过滤第2位',
                value: '2'
              },
              {
                label: '过滤第3位',
                value: '3'
              },
              {
                label: '过滤第4位',
                value: '4'
              },
              {
                label: '过滤第5位',
                value: '5'
              }
            ],
            filt: ['false'],
            filt2: ['false'],
          }
        },
      methods: {
          onSubmit() {

          },
      }
    }
</script>

<style scoped>

</style>
