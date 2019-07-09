<template>
    <div>
        <!-- <div v-for="user in this.$store.state.news">{{ user.title }}</div> -->
        <p v-for="user in this.$store.state.news">
            <a v-bind:href="user.url">{{user.title}}</a>
            <small>{{user.time_ago}} by {{user.user}}</small>
        </p>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>

<style>

</style>
