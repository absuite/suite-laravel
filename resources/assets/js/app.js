window.Vue = window.Vue || require('vue');

import gmf from './vendor/gmf-sys';
import cbo from './vendor/suite-cbo';
import amiba from './vendor/suite-amiba';
import bec from './vendor/suite-bec';
import layouts from './layouts';


Vue.use(cbo);
Vue.use(amiba);
Vue.use(bec);
Vue.use(layouts);

gmf.run();