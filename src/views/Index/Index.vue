<template>
  <div class="hello">
    <h1> Weather </h1>
    <h2>Location: {{ locationLoading ? `loading...` : `${lat}, ${lon}` }}</h2>
    <h3>Country: {{ countryLoading ? 'loading...' : country }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  computed: {
    ...mapGetters({
      lat: 'Location/getLatitude',
      lon: 'Location/getLongitude',
      locationLoading: 'Location/isLoading',
      country: 'Country/getCountryString',
      countryLoading: 'Country/isLoading'
    })
  },
  methods: {
    ...mapActions({
      getLocation: 'Location/getLocation'
    })
  },
  created () {
    this.getLocation()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
