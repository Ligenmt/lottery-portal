<template>
    <div>
      <mt-header title="abxxnfilt">
        <router-link to="/" slot="left">
          <mt-button icon="back">back</mt-button>
        </router-link>
      </mt-header>
      <div style="margin: 0 auto; padding: 10px; text-align: center">
        <mt-button id="abxxn_filt_btn" type="primary" data-clipboard-target="#abxxn_filt">复制</mt-button>
      </div>
      <div id="abxxn_filt">
         <span v-for="item in filtResult" style="margin: 2px;">
            {{item}}
          </span>
      </div>

    </div>
</template>

<script>

    import Clipboard from 'clipboard'

    export default {
        name: "abxxnfilt",
        data() {
          return {
            filtResult: [],
          }
        },

      mounted() {
        let f = localStorage.getItem('abxxnfilt')
        this.filtResult = JSON.parse(f);
        localStorage.clear();

        var clipboard = new Clipboard('#abxxn_filt_btn');
        clipboard.on('success', function(e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
          e.clearSelection();
        });

        clipboard.on('error', function(e) {
          console.error('Action:', e.action);
          console.error('Trigger:', e.trigger);
        });
        // document.execCommand("Copy")
        // alert("已复制好，可贴粘。");
      },
      methods: {
          onCopy() {

          },
      }
    }
</script>

<style scoped>
  .result {
    padding: 10px;
  }
</style>
