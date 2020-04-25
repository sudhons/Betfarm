<template>
  <section id="football">
    <div id="sport">
      <span>Football</span>
      <span>{{noOfGames}}</span>
    </div>

    <ul id="market-names">
      <li v-for="market of markets" :key="market" :class="{active: market===selectedMarket}">
        <a href="#" @click.prevent="selectMarket(market)">{{market}}</a>
      </li>
    </ul>

    <transition name="fade" mode="out-in">
      <keep-alive>
        <component
          :is="selectedComponent"
          :selectedEvents.sync="selectedEvents"
          :leagues="resource"
        />
      </keep-alive>
    </transition>

    <bet-booking v-if="betSlip" :numberOfBet="betSlip" />
  </section>
</template>

<script>
import MatchResult from "@/components/MatchResult";
import BothTeamsToScore from "@/components/BothTeamsToScore";
import Unavailable from "@/components/Unavailable";
import BetBooking from "@/components/ui/BetBooking";
import { getFootBallResource } from "@/apis/football";

export default {
  components: {
    MatchResult,
    BothTeamsToScore,
    DoubleChance: Unavailable,
    DrawNoBet: Unavailable,
    TotalGoals: Unavailable,
    "bet-booking": BetBooking
  },

  data() {
    return {
      markets: Object.freeze([
        "Match Result",
        "Double Chance",
        "Draw No Bet",
        "Total Goals",
        "Both Teams To Score"
      ]),
      selectedMarket: "Match Result",
      resource: null,
      selectedEvents: {},
      noOfGames: null
    };
  },

  created() {
    const footballData = getFootBallResource();

    this.resource = Object.freeze(footballData);
    this.noOfGames = Object.values(footballData).reduce(
      (total, league) =>
        total + Object.keys(Object.values(league.competition)[0].game).length,
      0
    );
  },

  computed: {
    betSlip() {
      return Object.keys(this.selectedEvents).length;
    },

    selectedComponent() {
      return this.selectedMarket.split(/\s+/).join("");
    }
  },

  methods: {
    selectMarket(market) {
      this.selectedMarket = market;
    }
  }
};
</script>

<style scoped>
#football {
  margin-bottom: 50px;
}

#market-names {
  overflow-y: hidden;
  overflow-x: auto;
  height: 50px;
  display: flex;
  align-items: center;
}

#market-names li {
  white-space: nowrap;
  flex-grow: 1;
}

#market-names li a {
  padding: 4px 10px;
  font-size: 14px;
  line-height: 19px;
}

.active > a {
  font-weight: bold;
  border-bottom: #575353 solid 3px;
}

#sport {
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in;
}
</style>
