<template>
  <div>
    <section id="section-sports">
      <ul>
        <li v-for="sport of sports" :key="sport" :class="{active: sport===selectedSport}">
          <router-link :to="`/${sport}`">
            <div class="sport-logo"></div>
            <span class="sport-name">{{sport}}</span>
          </router-link>
        </li>
      </ul>
    </section>

    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedSport: null,
      sports: Object.freeze(["football", "tennis", "basketball", "volleyball"])
    };
  },

  watch: {
    $route: {
      handler({ path }) {
        this.selectedSport = path.slice(1);
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

li {
  position: relative;
}

#section-sports,
ul {
  height: 80px;
}

.sport-logo {
  margin: auto;
  margin-bottom: 8px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #f7cb82;
}

.active .sport-logo {
  background-color: #575353;
}

.active .sport-name {
  font-weight: 600;
}

.active::before {
  content: "";
  position: absolute;
  height: 8px;
  left: 35%;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid #575353;
  top: 53px;
}
</style>
