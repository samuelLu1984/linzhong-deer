<template>
  <div  class='bookcard'>
    <img :src='bookitem.image' mode="aspectFit" @click.stop='preview'/>
  </div>
</template>
<script>
  export default {
    props:['bookitem'],
    methods:{
      preview(){
        wx.navigateTo({
          url:'/pages/detail/main?id='+this.bookitem.id
        })
      }
    }
  }
</script>
<style >
  
</style>
