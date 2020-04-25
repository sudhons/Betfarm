<template>
  <transition name="anim-show" appear>
    <div>
      <app-button class="footer-btn">Book Bet</app-button>
      <app-button class="footer-btn">Bet Slip ({{numberOfBet}})</app-button>
    </div>
  </transition>
</template>

<script>
import AppButton from "./AppButton";
export default {
  props: {
    numberOfBet: {
      type: Number,
      required: true
    }
  },

  components: {
    "app-button": AppButton
  }
};
</script>

<style scoped>
div {
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  height: 48px;
  background: #f7cb82;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}

.anim-show-enter-active,
.anim-show-leave-active {
  transition: all 0.5s;
}

.anim-show-enter,
.anim-show-leave-to {
  opacity: 0;
  transform: translateY(48px);
}
</style>
