import Vue from 'vue';
import VueRouter from 'vue-router';

import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
import NotFound from './components/NotFound.vue';
import Knu from './components/Knu.vue';
import Baz from './components/Baz.vue';

//주소에 해당하는 컴포넌트 등록

Vue.use(VueRouter);

const routes = [
{path:'/', component:Bar, name:'Bar'},
{path:'/login/:id', component:Foo, name:'Foo', props:true}, //속성이름 사용
{path:'/my/:pw', component:Baz, name:'Baz', props:true}, //속성이름 사용
{path:'/knu', component:Knu, name:'knu', props:{username:'강감찬'}}, //속성이름 사용
{path:'*', component:NotFound, name:'NotFound'}
]

const router = new VueRouter({routes});
export default router; //router를 밖에서 쓸 수 있도록 //라우터를 main.js에 등록