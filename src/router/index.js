import Vue from 'vue';
import VueRouter from 'vue-router';

import NewsView from '../vues/NewsView.vue';
import JobsView from '../vues/JobsView.vue';
import AskView from '../vues/AskView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
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
    ]
});