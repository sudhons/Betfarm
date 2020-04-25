<template>
  <section>
    <div v-if="!$attrs.leagues">
      <span>{{$route.path.slice(1)}}</span>
    </div>
    <p>This page is currently unavailable</p>
  </section>
</template>

<style scoped>
div {
  height: 40px;
  background-color: #575353;
  color: #f3eac6;
  line-height: 40px;
  text-transform: capitalize;
  padding: 0 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
}
</style>
