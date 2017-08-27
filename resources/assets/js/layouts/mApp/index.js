import app from './app.vue';
import bottombar from './bottombar.vue';
import toolbar from './toolbar.vue';
export default function install(Vue) {
    Vue.component('manaApp', app);
    Vue.component('manaAppBottombar', bottombar);
    Vue.component('manaAppToolbar', toolbar);
}
