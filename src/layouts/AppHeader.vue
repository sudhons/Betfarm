<template>
  <header>
    <div id="heading">
      <a href="#" @click.prevent id="menu">
        <img src="@/assets/svgs/menu.svg" />
        <span>A - Z</span>
      </a>
      <a href="#" @click.prevent id="brand">
        <img src="@/assets/svgs/brand.svg" />
      </a>
      <a href="#" @click.prevent id="search">
        <img src="@/assets/svgs/magnifying-glass.svg" />
      </a>
    </div>
    <div id="auth">
      <app-button id="btn-register">Join Now</app-button>
      <app-button id="btn-login">Login</app-button>
    </div>
  </header>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
export default {
  components: {
    "app-button": AppButton
  }
};
</script>

<style scoped>
header {
  background: #f7cb82;
  text-align: center;
  padding: 13px 16px 10px;
  height: 101px;
}

#heading {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#menu > img,
#search > img {
  width: 18px;
}

#menu {
  display: flex;
}

#menu span {
  font-weight: bold;
  font-size: 14px;
  margin-left: 8px;
}

#auth {
  display: flex;
  justify-content: space-between;
}

#brand {
  transform: translateX(-15px);
}

#btn-register {
  background: #ef5350;
  text-transform: uppercase;
}

#btn-login {
  background: #575353;
  text-transform: uppercase;
}
</style>
