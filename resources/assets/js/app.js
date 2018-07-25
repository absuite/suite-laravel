import gapp from 'gmf/app';
import component from 'gmf/component-all';
import routesAuth from 'gmf/routes/auth';
import routesMd from 'gmf/routes/md';

import cbo from './vendor/suite-cbo';
import amiba from './vendor/suite-amiba';
import bec from './vendor/suite-bec';
import docs from './vendor/suite-docs';
import http from 'gmf/core/utils/http';
import routesCbo from './vendor/suite-cbo/routes/cbo';


gapp.use(component);




gapp.use(docs);
gapp.use(cbo);
gapp.use(amiba);
gapp.use(bec);

gapp.route(routesAuth);
gapp.route(routesMd);
gapp.route(routesCbo);

gapp.config(function() {
  return new Promise(function(resolve, reject) {
    http.get('/site/configs').then(res => {
      resolve(res.data.data);
    });
  });
});
gapp.run({});
