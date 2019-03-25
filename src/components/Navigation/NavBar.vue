<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top border-bottom">
    <router-link class="navbar-brand text-primary" to="/">
      <slot name="title"></slot>
    </router-link>
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
        <slot name="links"></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};

/*

#原始网页brand显示：
<a class="navbar-brand text-primary" href="#">{{title}}</a>

#以router-link显示：
<router-link class="navbar-brand text-primary" to="/">{{title}}</router-link>

*/
</script>
