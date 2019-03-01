<template>
    <div class="row h-100">
        <div class="col-12 col-md-4 mh-100 splited-view border-right">
            <slot name="port"></slot>
        </div>
        <div class="col-12 col-md-8 mh-100 splited-view">
            <slot name="starboard"></slot>
        </div>
        <slot name="misc"></slot>
    </div>
</template>

<script>
export default {
  //
  name: "Container"
};
</script>

<style scoped>
.splited-view {
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1em;
}
</style>
