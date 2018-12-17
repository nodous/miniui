<template>
  <div>
    <!-- <nav-bar title="新聞詳情"/> -->
    <div style="height:400px;width:100%;background:blue"></div>
    <span>[123]</span>
  </div>
</template>
<script>
export default {
  created () {
    let id = this.$route.query.id
    console.log(id)
    this.$axios.get('getnew/' + id).then(res => {
      console.log(res.data.message[0])
    })
      .catch(err => console.log(err))
  }
}
</script>
