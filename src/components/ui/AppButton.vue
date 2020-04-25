<template>
  <a href="#" @click.prevent="$emit('click')">
    <slot />
  </a>
</template>

<style scoped>
a {
  border-radius: 2px;
  max-width: 170px;
  width: 47%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
  font-size: 10px;
  background: #575353;
  color: #fff;
  font-size: 10px;
  text-decoration: none;
}

@media (max-width: 400px) {
  a {
    min-width: 110px;
  }
}
</style>
