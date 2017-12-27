window.Vue = window.Vue || require('vue');


import {start} from './vendor/gmf-sys';
import cbo from './vendor/suite-cbo';
import amiba from './vendor/suite-amiba';
import bec from './vendor/suite-bec';
import docs from './vendor/suite-docs';

Vue.use(cbo);
Vue.use(amiba);
Vue.use(bec);
Vue.use(docs);


const appMixin = {
  methods: {
    async loadConfigs() {
      return await this.$http.get('/site/configs');
    },
    async beforeCreated() {
      this.configs.home='/app/dashboard';
      if(window.gmfConfig){
        this.$setConfigs(window.gmfConfig);
      }
    }
  }
};
start.run({},appMixin);