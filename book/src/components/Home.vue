<template>
  <div id="home">
    {{ msg }}
    <button @click="boom">Send Boom</button>
  </div>
</template>

<script>
import { bus } from '../main.js'
export default {
  name: 'home',
  data () {
    return {
      msg: 'We are home now',
      secret: 'Hoho!'
    }
  },
  methods: {
    boom: function () {
      bus.$emit('BigBoom', this.secret)
      console.log('big boom has been sent')
    }
  }
}
</script>

<style>

</style>
