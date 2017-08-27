<template>
  <div class="mana-app-toolbar layout-row layout-align-center-center" :class="[classes]">
    <div class="app-action">
      <md-button class="md-icon-button btn-close" @click.native="back">
        <md-icon md-src="/img/vendor/mana/ic_navigate_before_white.png"></md-icon>
      </md-button>
    </div>
    <div class="app-title">
      <md-button>{{ title }}</md-button>
    </div>
    <div class="app-tools" v-if="mdMenu">
      <md-button class="md-icon-button"  @click.native="openMenu">
        <md-icon>menu</md-icon>
      </md-button>
    </div>
    <div class="mana-app-menu" @click.native="menuBoxClick($event)">
      <md-layout v-for="item in extendMenus" :key="item" class="menu-items md-nowrap">
        <h3 class="layout-column layout-align-center-center">{{item.name}}</h3>
        <md-layout>
          <md-layout v-wave="true" v-for="sItem in item.menus" :key="sItem" @click.native="goNav(sItem,$event)" md-column class="menu-item">
            <md-icon v-if="sItem.icon.indexOf('.png')>0" :md-src="sItem.icon"></md-icon>
            <md-icon v-else>{{ sItem.icon }}</md-icon>
            <span>{{ sItem.name }}</span>
          </md-layout>
        </md-layout>
      </md-layout>
    </div>
    <md-background v-if="!mdTransparent"></md-background>
  </div>
</template>
<script>
  export default {
    props: {
      mdToken: String,
      mdTitle: String,
      mdMenu:Boolean,
      mdHome:Boolean,
      mdTransparent:Boolean
    },
    data() {
      return {
        menuOpened: false,
        extendMenus:[],
        title:"经营快报"
      };
    },
    computed: {
      classes() {
        return {
          'mana-menu-opened': this.menuOpened
        };
      }
    },
    watch: {
      "$root.title":function(v,o){
        this.title=v;
      }
    },
    methods: {
      back(){
        if(this.menuOpened){
          this.menuOpened=false;
          return;
        }
        if(this.mdHome){
          yyesn&&yyesn.client.closePage();
        }else{
          this.$router.go(-1);
        }
      },
      openMenu(){
        this.menuOpened=!this.menuOpened;
      },
      menuBoxClick(event){
        event&&event.preventDefault();
      },
      goNav(nav,event){
        var options={},name;
        if(!nav)return;
        if(typeof nav==='string'){
          name=nav;
        }else if(nav&&nav.uri){
          if(nav.params){
            if(nav.params&&typeof nav.params==='string'){
              nav.params=JSON.parse(nav.params);
            }
            options.query=nav.params;
          }
          name=nav.uri;
        }
        this.$goModule(nav.uri,options,!this.isHomed);
        this.menuOpened=false;
      },
    },
    created(){
      this.extendMenus=this.$root.userData.config.menus;
    }
  };
</script>
