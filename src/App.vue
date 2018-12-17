<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- <router-view/> -->
    <router-link :to="{name: 'photo.list', params: {categoryId: '0'}}">
       <button @click="navTo">新聞組件</button>
    </router-link>
    <div>
      <router-link to="/A" @click.native="clickLink">A</router-link>
        <router-link to="/B" @click.native="clickLink">B</router-link>
        <transition :name="$store.state.states">
          <router-view/>
        </transition>
        <div>Index Page</div>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="list">
        <img @click="changeHash" slot="icon" src="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="b">
        <img @click="changeHash" slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="c">
        <img @click="changeHash" slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="d">
        <img @click="changeHash" slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '',
      view: 'v-a'
    }
  },
  methods: {
    clickLink () {
      this.$store.commit('setTransition', 'turn-on')
    },
    changeHash () {
      this.$nextTick(() => {
        console.log(this.selected)
        this.$router.push({
          name: this.selected
        })
      })
    },
    navTo () {
      this.$router.push({

      })
    }
  },
  mounted () {
    var _this = this
    window.addEventListener(
      'popstate',
      function (e) {
        _this.$store.commit('setTransition', 'turn-off')
      },
      false
    )
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  },
  watch: {
    // selected (vod) {
    //   console.log(vod)
    //   this.$router.push({
    //     name: vod
    //   })
    // }
  }
}
</script>
<style>
.mint-header.is-fixed {
  position: relative;
}
* {
  margin: 0;
  padding: 0;
}
.btn {
  width: 50%;
}
html,
body,
#app {
  height: 100%;
}
.turn-on-enter {
  transform: translate3d(-100%, 0, 0);
}
.turn-on-leave-to {
  /* transform: translate3d(-20%, 0, 0); */
}
.turn-on-enter-active,
.turn-on-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-enter {
  /* transform: translate3d(-20%, 0, 0); */
}
.turn-off-leave-to {
  transform: translate3d(10%, 0, 0);
}
.turn-off-enter-active,
.turn-off-leave-active {
  transition: transform 0.4s ease;
}
.turn-off-leave-active {
  z-index: 2;
}
</style>
