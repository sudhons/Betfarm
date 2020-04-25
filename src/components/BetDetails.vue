<template>
  <div class="table-grid-body">
    <ul class="col-0">
      <li>
        <span class="team-name">{{game.team1_name}}</span>
        <span class="team-score">{{game.info.score1}}</span>
      </li>
      <li>
        <span class="team-name">{{game.team2_name}}</span>
        <span class="team-score">{{game.info.score2}}</span>
      </li>
      <li>
        <span class="time">{{formatGameTime(game.info.current_game_time)}}</span>
        <span class="star">
          <a href="#" @click.prevent>
            <img src="~@/assets/svgs/star.svg" />
          </a>
        </span>
      </li>
    </ul>

    <slot :events="events" />
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },

  computed: {
    events() {
      const result = {};
      Object.entries(this.event).forEach(([id, { name, price }]) => {
        result[name] = { id, price };
      });

      return result;
    }
  },

  methods: {
    formatGameTime(gameTime = 0) {
      if (gameTime == 0) {
        return "Not Started";
      }

      if (gameTime > 45) {
        return `2nd Half ${gameTime % 45}"`;
      }

      return `1st Half ${gameTime}"`;
    }
  }
};
</script>

<style scoped>
li {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
}

.star {
  width: 20%;
  text-align: center;
}

.star img {
  height: 16px;
}

span {
  font-weight: 600;
}

.team-name,
.time {
  width: 80%;
}

.team-score {
  width: 20%;
  text-align: center;
}

.team-name,
.team-score {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.time {
  font-size: 10px;
}

.event-price {
  background-color: #f7cb82;
}
</style>
