<template>
    <div>
        <!-- <div v-for="ask in fetchedAsk">{{ ask.title }}</div> -->
        <p v-for="ask in fetchedAsk">
            <a v-bind:href="ask.url">{{ask.title}}</a>
            <small>{{ask.time_ago}}, {{ask.user}}</small>
        </p>        
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            fetchedAsk: 'fetchedAsk'
        })
        // #2
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })
        // #1
        // ask() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
