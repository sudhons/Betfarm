<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./layouts/AppHeader";

export default {
  name: "App",
  components: {
    "app-header": AppHeader
  }
};
</script>

<style>
@import url("~@/assets/css/grid.css");

@font-face {
  font-family: "Open Sans";
  font-weight: 400;
  font-style: normal;
  src: url("~@/assets/fonts/OpenSans-Regular.ttf");
}

@font-face {
  font-family: "Open Sans";
  font-weight: 600;
  font-style: normal;
  src: url("~@/assets/fonts/OpenSans-SemiBold.ttf");
}

@font-face {
  font-family: "Open Sans";
  font-weight: bold;
  font-style: normal;
  src: url("~@/assets/fonts/OpenSans-Bold.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
}

html,
body,
#app {
  min-height: 100vh;
  background-color: #f3eac6;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
