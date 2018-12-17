<template>
  <div>
       <div id="animated-number-demo" ref="inde">
        <input v-model.number="number" type="number" step="20">
        <p>{{ animatedNumber }}</p>
      </div>
      <button @click="btn">点击</button>
       <router-view/>
  </div>
</template>

<script>
import {TweenMax} from 'gsap'
export default {
  data () {
    return {
      number: 0,
      tweenedNumber: 100
    }
  },
  methods: {
    btn (newValue) {
      // this.number = 50
      console.log(this.$data)
      TweenMax.to(this.$data, 2, {tweenedNumber: 50})
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  components: {
  },
  watch: {
  },
  created () {
    this.number = 1000
    TweenMax.to(this.$data, 2, {tweenedNumber: 1000})
  }
}
</script>
<style>
</style>
