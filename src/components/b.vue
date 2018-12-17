<template>
<!-- <common title="B"></common> -->
<div id="app" class="main-container"
    @mousemove="mouseMoving"
    @mouseup="stopDrag">
  <div class="upper-container" :style="bgStyle">
    <h2 class="temperature-text">{{currentTemperature | round}}</h2>
    <div class="temperature-graduation">
      <div class="temperature-element" v-for="el in temperatureGrades" :key="el" :style="tempElementStyle(el)">
          <span class="temperature-element-number">{{el}}</span><br>
          <span class="temperature-element-line">|</span>
        </div>
    </div>
  </div>
  <div class="lower-container">
    <div class="slider-container" :style="sliderStyle">
      <svg width="150" height="30" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74.3132 0C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0.5)" fill="#12132C"/>
</svg>
      <div class="slider-button" @mousedown="startDrag">
        <i class="fas fa-thermometer-empty slider-icon"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {TweenLite} from 'gsap'
// import common from './common'
const sliderMinX = 0
const sliderMaxX = 240
const coldGradient = {
  start: '#5564c2',
  end: '#3a2e8d'
}
const hotGradient = {
  start: '#f0ae4b',
  end: '#9b4d1b'
}
export default {
  data () {
    return {
      temperatureGrades: [10, 15, 20, 25, 30],
      dragging: false, // 是否正在拖拽
      initialMouseX: 0, // 拖拽开始x的位移
      sliderX: 0, // 按钮和波兰当前的位移
      initialSliderX: 0, // 按钮和波浪初始的x位移
      gradientStart: coldGradient.start, // 渐变颜色
      gradientEnd: coldGradient.end // 渐变结束的颜色
    }
  },
  filters: {
    round (num) {
      return Math.round(num)
    }
  },
  computed: {
    sliderStyle () {
      return `transform: translate3d(${this.sliderX}px, 0, 0);`
    },
    bgStyle () {
      return `background: linear-gradient(to bottom right, ${this.gradientStart}, ${this.gradientEnd});`
    },
    currentTemperature () {
      const tempRangeStart = 10
      const tempRange = 20
      console.log((this.sliderX / sliderMaxX * tempRange) + tempRangeStart)
      return (this.sliderX / sliderMaxX * tempRange) + tempRangeStart // 返回当前位置
    }
  },
  methods: {
    startDrag (e) {
      console.log(222)
      this.dragging = true
      this.initialMouseX = e.pageX
      // console.log(e.pageX)
      this.initialSliderX = this.sliderX
    },
    stopDrag () {
      this.dragging = false
    },
    mouseMoving (e) {
      console.log(111)
      if (this.dragging) { // 是看是否是拖拽状态
        console.log('当前鼠标x位置' + e.pageX, '之前的位置' + this.initialMouseX)
        const dragAmount = e.pageX - this.initialMouseX
        const targetX = this.initialSliderX + dragAmount // 按钮现在的位置
        this.sliderX = Math.max(Math.min(targetX, sliderMaxX), sliderMinX) // 返回最低值 返回最大值

        let targetGradient = coldGradient
        if (this.currentTemperature >= 25) {
          targetGradient = hotGradient
        }

        if (this.gradientStart !== targetGradient.start) {
          TweenLite.to(this, 0.7, {
            'gradientStart': targetGradient.start,
            'gradientEnd': targetGradient.end
          })
        }
      }
    },
    tempElementStyle (tempNumber) {
      const nearDistance = 3
      const liftDistance = 12

      const diff = Math.abs(this.currentTemperature - tempNumber)
      const distY = (diff / nearDistance) - 1
      const elementY = Math.min(distY * liftDistance, 0)
      return `transform: translate3d(0, ${elementY}px, 0)`
    }
  }
}
</script>

<style scoped>
.B {
  width: 100%;
  height: 100%;
  background-color: rgb(245, 105, 250);
  position: fixed;
}
body {
  margin: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  height: 100vh;
}

.upper-container {
  position: relative;
  background: linear-gradient(to bottom right, #5564c2, #3a2e8d);
}
.lower-container {
  background-color: #12132C;
}

.temperature-text {
  position: relative;
  bottom: 40px;
  font-size: 100px;
  width: 100%;
  text-align: center;
  user-select: none;
}

.temperature-element {
  text-align: center;
  display: inline-block;
  width: 40px;
  margin: 0 10px 0 10px;
  opacity: 0.7;
}

.temperature-element-line {
  font-size: 7px;
}

.temperature-graduation {
  position: absolute;
  left: calc(50% - 150px);
  bottom: 25px;
  user-select: none;
}

.slider-container {
  width: 150px;
  height: 80px;
  margin-top: -30px;
  margin-left: calc(50% - 187px);
  position: relative;
}

.slider-button {
  position: absolute;
  left: 42px;
  top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2724a2;
  cursor: grab;
  cursor: -webkit-grab;
  cursor: -moz-grab;
}

.slider-icon {
  margin-top: 16px;
  margin-left: 21px;
  color: white;
}
</style>
