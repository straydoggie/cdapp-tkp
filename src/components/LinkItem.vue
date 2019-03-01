<template>
    <li class="nav-item">
          <router-link class="nav-link" :to="herf"><slot></slot></router-link>
        </li>
</template>

<script>
export default {
    name:"LinkItem",
    props:["herf"],
    
}
</script>

