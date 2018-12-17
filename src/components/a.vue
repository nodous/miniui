<template>
    <div class="A">
        <common title="a">
           <input type="number" step="10" v-model.number='number'>
        </common>
        <div class="bottom">
        </div>
    </div>
</template>

<script>
import common from './common'
export default {
  data () {
    return {}
  },
  components: {
    common
  }
}
</script>

<style scoped>
.A {
  width: 100%;
  height: 100%;
  background-color: rgb(214, 198, 52);
  position: fixed;
}

.bottom {
  width: 100%;
  height: 50px;
  background-color: red;
  position: fixed;
  bottom: 0px;
}
</style>
