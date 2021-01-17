import Vue from 'vue';
import VueRouter from 'vue-router';

import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
import NotFound from './components/NotFound.vue';
import FooChild1 from './components/FooChild1.vue';
import FooChild2 from './components/FooChild2.vue';

//주소에 해당하는 컴포넌트 등록


Vue.use(VueRouter);

const routes = [
    { path: '/', component: Bar, name: "Bar" },
    { path: '/foo', component: Foo, name: "foo",
        children:[
            {path:'fooChild1', component:FooChild1},
            {path:'fooChild2', component:FooChild2},
        ]
}, //end /foo
    { path: '*', component: NotFound, name: "NotFound" }
]

const router = new VueRouter({routes});
export default router; //router를 밖에서 쓸 수 있도록 //라우터를 main.js에 등록