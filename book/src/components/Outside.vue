<template>
  <div id="outside">
    {{ msg }}
  </div>
</template>

<script>
import { bus } from '../main.js'
export default {
  name: 'outside',
  data () {
    return {
      msg: 'We are outside now'
    }
  },
  created () {
    bus.$on('BigBoom', $event => {
      console.log($event)
    })
  }
}
</script>

<style>

</style>
