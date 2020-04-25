export default {
  methods: {
    selectEvent(gameId, eventId) {
      let updatedSelectedEvents = {}

      if (this.selectedEvents[gameId] === eventId) {
        Object.entries(this.selectedEvents).forEach(([key, value]) => {
          if (value !== eventId) updatedSelectedEvents[key] = value;
        });
      } else {
        updatedSelectedEvents = { ...this.selectedEvents, [gameId]: eventId };
      }

      this.$emit("update:selectedEvents", updatedSelectedEvents);
    }
  }
}
