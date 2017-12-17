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

start.run({defaultRoutes:true});