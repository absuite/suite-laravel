<template>
  <div class="md-app layout-column mana-app">
    <div v-if="loadingCount>0" class="mana-app-flash layout-column layout-align-center-center">
      <md-image md-src="/img/vendor/mana/flash.png"></md-image>
      <h2 class="title">经营快报</h2>
    </div>
    <div class="mana-app-body layout-column layout-fill flex">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
  var dWidth=750;//wush设计稿的尺寸
   (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                var zoom=clientWidth*2 / dWidth;

                zoom=Math.max(zoom,0.95);
                zoom=Math.min(zoom,1.1);
                docEl.style.fontSize = (625 * zoom) + '%';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

  export default {
    data() {
      return {
        loadingCount:1,
      };
    },
    watch: {
      "$root.title":function(v,o){
        this.title=v;
      },
      "$root.userData.config.ent":function(v,o){
        this.$root.userData.entId=v&&v.id?v.id:'';
      }
    },
    methods: {
      loadConfigs(){
        setTimeout(() =>{
          this.loadingCount--;
        }, 800);
      },
    },
    created(){
      //设置API远程调用信息,用户当前企业信息
      this.$root.$set(this.$root.userData,'config',window.gmfConfig);
      this.$documentTitle('经营快报');
      this.loadConfigs();
    }
  };
</script>
