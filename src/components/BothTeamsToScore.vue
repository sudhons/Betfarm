<template>
  <div>
    <template v-for="league in leagues">
      <div class="table-grid-head" :key="league.alias">
        <span class="col-0 league">
          <span class="league-name">{{Object.values(league.competition)[0].name}}</span>
        </span>
        <span class="col-2">Yes</span>
        <span class="col-3">No</span>
      </div>

      <bet-details
        v-for="game in Object.values(league.competition)[0].game"
        :key="game.id"
        :game="game"
        :event="getEvents(game)"
      >
        <template v-slot="{ events: { Yes, No} }">
          <div class="col-2 event-price">
            <a
              href="#"
              :class="{'selected-event': selectedEvents[game.id] === Yes.id, 'disabled': !Yes.price}"
              @click.prevent="selectEvent(game.id, Yes.id)"
            >{{Yes.price || '-' }}</a>
          </div>

          <div class="col-3 event-price">
            <a
              href="#"
              :class="{'selected-event': selectedEvents[game.id] === No.id, 'disabled': !No.price}"
              @click.prevent="selectEvent(game.id, No.id)"
            >{{No.price || '-'}}</a>
          </div>
        </template>
      </bet-details>
    </template>
  </div>
</template>

<script>
import BetDetails from "./BetDetails";
import selectEventMixin from "@/mixins/selectEventMixin";
export default {
  props: {
    selectedEvents: {
      type: Object,
      required: true
    },
    leagues: {
      type: Object,
      required: true
    }
  },

  mixins: [selectEventMixin],

  components: {
    "bet-details": BetDetails
  },

  methods: {
    getEvents(game) {
      const market = Object.values(game.market).find(
        ({ name }) => name === "Both Teams To Score"
      );

      if (!market) {
        return {
          Yes: { name: "Yes", price: null },
          No: { name: "No", price: null }
        };
      }

      return market.event;
    }
  }
};
</script>

<style scoped>
a {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}

.league {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
}

.league-name {
  margin-left: 24px;
}

.league::before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #575353;
}

.selected-event {
  background-color: #575353;
  color: #fff;
}

.disabled {
  pointer-events: none;
  cursor: default;
}
</style>
