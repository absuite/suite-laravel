window.Vue = window.Vue || require('vue');


import { start } from './vendor/gmf-sys';
import cbo from './vendor/suite-cbo';
import amiba from './vendor/suite-amiba';
import bec from './vendor/suite-bec';
import docs from './vendor/suite-docs';
import http from 'gmf/core/utils/http';
Vue.use(docs);
Vue.use(cbo);
Vue.use(amiba);
Vue.use(bec);



const appMixin = {
  methods: {
    async loadConfigs() {
      return await this.$http.get('/site/configs');
    },
    async beforeCreated() {
      this.configs.home = '/app/dashboard';
      this.configs.loadEnum = true;
      if (window.gmfConfig) {
        this.$setConfigs(window.gmfConfig);
      }
    }
  }
};

var promise = new Promise(function(resolve, reject) {
  http.get('/site/configs').then(res => {
    window.gmfConfig = res.data.data;
    resolve();
  });
});
start.run({promise}, appMixin);
