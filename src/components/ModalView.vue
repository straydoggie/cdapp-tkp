<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container" :class="styleValue">
          <div class="modal-header">
            <slot name="header">
              <!-- header content with slot -->
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <!-- body content with slot -->
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <!-- footer content with slot -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalView",
  props: ["size"],
  computed: {
    styleValue() {
      switch (this.size) {
        case "large":
          return "modal-large";
        case "small":
          return "modal-small";
        default:
          return "modal-middle";
      }
    }
  }
};
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0 auto;
  padding: 1em 1.5em;
  background-color: #fff;
  border-radius: 1em;
  box-shadow: 0 0.5em 2em rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.modal-small {
  max-width: 50em;
  min-width: 15em;
  width: 30vw;
}

.modal-middle {
  max-width: 100em;
  min-width: 20em;
  width: 50vw;
}

.modal-large {
  min-width: 30em;
  width: 80vw;
}

.modal-header {
  margin: 0;
  padding: 0.5em 1em;
}

.modal-body {
  margin: 0;
  padding: 0;
}

.modal-footer {
  margin: 0;
  padding: 0.5em 1em;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
