<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in arr" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      arr: []
    }
  },
  created () {
    this.$axios.get('getlunbo').then(res => {
      this.arr = res.data.message
      console.log(this.arr)
    })
      .catch(err => console.log('err', err))
  }
}
</script>
<style>
.mint-swipe {
  width: 100%;
  height:400px;
  background: black;
}
.mint-swipe {
  width: 100%;
}
</style>
