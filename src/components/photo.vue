<template>
  <div>
    <ul>
      <li v-for="item in imgs" :key="item">
        12323123
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgs: []
    }
  },
  beforRouteUpdate (to, from, next) {
    console.log(to)
    this.loadImgByCategoryId(to.params.categoryId)
    next()
  },
  created () {
    let categoryId = this.$route.params.categoryId
    this.loadImgByCategoryId(categoryId)
    this.$axios.get('/getimgcategory').then(res => {
      console.log(123)
      // 向数组的第一个元素添加一个全部
      this.categorys.unshift({
        id: 0, title: '全部'
      })
      console.log(res.data)
    })
      .catch(err => console.log('获取失败' + err))
  },
  methods: {
    loadImgByCategoryId (categoryId) {
      // this.$axios.get('getimages/' + categoryId).then(res => {
      //   this.imgs = res.data.message
      // })
      //   .watch(err => console.log(err))
    }
  }
}
</script>
