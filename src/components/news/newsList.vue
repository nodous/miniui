<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="{name: 'news.detail', query:{id: item.id}}">
           <img src="" alt="">
           <span>{{item.msg}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {msg: '123', id: '1'},
        {msg: '1234', id: '2'},
        {msg: '12345', id: '3'},
        {msg: '123456', id: '4'},
        {msg: '312', id: '5'},
        {msg: '324', id: '6'},
        {msg: '23444', id: '7'},
        {msg: '45322', id: '8'}
      ]
    }
  }
}
</script>
<style scoped>
li{
  list-style-type: node;
  height:20px;
  margin:5px 0;
  border:1px solid black;
}
</style>
