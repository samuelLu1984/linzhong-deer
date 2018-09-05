<template>
    <div class=star>
        <span class='top red'>☆☆☆☆☆</span>
        <div class='bottom red' :style='style'>★★★★★</div>
    </div>
</template>
<script>
    export default{
        props:['rating'],
            
        computed:{
          style(){
              return `width:${this.rating*10}%`
          }
        }
    }
</script>
<style scoped>
  .star{
      position: relative;
      display: inline-block;
      overflow: hidden;
      text-align: left;
      margin-left: 5rpx;
  }
   
   .star .bottom{
      position: absolute;
      display: inline-block;
      left: 0;
      top:0;
      width:0;
      overflow: hidden;
      
   }
</style>
