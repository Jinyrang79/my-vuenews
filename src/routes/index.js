import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../vues/NewsView.vue';
import JobsView from '../vues/JobsView.vue';
import AskView from '../vues/AskView.vue';
import UserView from '../vues/UserView.vue';
import ItemView from '../vues/ItemView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // url 에 # 제거
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {

            // url 주소    
            path: '/news',
            // url에 해당하는 컴포넌트 (page)
            component: NewsView
        },
        {
            path: '/jobs',
            component: JobsView
        },
        {
            path: '/ask',
            component: AskView
        },
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            component: ItemView
        },
    ]
});