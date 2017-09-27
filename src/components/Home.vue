<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Events page</h1>
    <button class="btn btn-primary" v-on:click="getEvent()">Get an Event</button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ event }}</blockquote></h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: ''
    }
  },
  methods: {
    getEvent() {
      this.$http
        .get('http://localhost:4000/api/events', (data) => {
          this.quote = data;
        })
        .error((err) => console.log(err))
    }
  }
}
</script>
