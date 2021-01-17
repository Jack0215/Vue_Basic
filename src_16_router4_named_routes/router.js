import Vue from 'vue';
import VueRouter from 'vue-router';

import Baz from './components/Baz.vue';
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
import NotFound from './components/NotFound.vue';

//주소에 해당하는 컴포넌트 등록


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Bar, name: "Bar" },
    { path: '/login', component: Foo, name: "Foo" },
    { path: '/my/:id', component: Baz, name: "Baz", props:true},//속성상
    { path: '*', component: NotFound, name: "NotFound" }
]

const router = new VueRouter({routes});
export default router; //router를 밖에서 쓸 수 있도록 //라우터를 main.js에 등록