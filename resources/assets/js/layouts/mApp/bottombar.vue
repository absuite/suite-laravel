<template>
  <md-bottom-bar @change="barChange">
    <md-bottom-bar-item md-icon="home"  :md-active="mdIndex===0">首页</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="remove_red_eye" :md-active="mdIndex===1">二维码</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="person" :md-active="mdIndex===2">我</md-bottom-bar-item>
    <md-background v-if="!mdTransparent"></md-background>
  </md-bottom-bar>
</template>
<script>
  export default {
    props: {
      mdIndex: Number,
      mdTransparent:Boolean
    },
    methods: {
      barChange(ind){
        if(ind===0){
          this.$goModule('manaAppHome',{},true);
        }
        if(ind===1){
          this.$goModule('manaAppQrcode',{},true);
        }
        if(ind===2){
          this.$goModule('manaAppSetting',{},true);
        }
      }
    },
    created(){
    }
  };
</script>
