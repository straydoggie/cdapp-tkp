<template>
    <container>
        <template slot="port"></template>
        <template slot="starboard"></template>
        <template slot="misc"></template>
    </container>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
    name: "Papers",
    components: {
        Container
    },
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {}
};
</script>

<style>
</style>
