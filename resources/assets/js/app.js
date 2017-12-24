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
      try {
        const response = await this.$http.get('/site/configs');
        this.$setConfigs(response.data.data);
      } catch (err) {
        return false;
      }
      return false;
    },
    async beforeCreated() {
      if(window.gmfConfig){
        this.$setConfigs(window.gmfConfig);
      }
      await this.loadConfigs();
    }
  }
};
start.run({defaultRoutes:true},appMixin);