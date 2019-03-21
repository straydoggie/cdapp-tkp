<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top border-bottom">
        <router-link class="navbar-brand text-primary" to="/">{{title}}</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <link-item v-for="link in links" :key="link.id" :path="link.path">{{link.name}}</link-item>
            </ul>
        </div>
    </nav>
</template>

<script>
import LinkItem from "@/components/LinkItem.vue";
export default {
    name: "Navigation",
    props: ["title"],
    components: {
        LinkItem
    },
    data: function() {
        return {
            links: [
                { path: "/library", name: "题目库" },
                { path: "/papers", name: "试卷集" }
            ]
        };
    }
};

/*

#原始网页brand显示：
<a class="navbar-brand text-primary" href="#">{{title}}</a>

#以router-link显示：
<router-link class="navbar-brand text-primary" to="/">{{title}}</router-link>

*/
</script>
