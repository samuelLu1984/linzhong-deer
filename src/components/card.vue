<template>
  <a :href="detailUrl">
    <div class="book">
      <div class="img">
           <img :src="book.image" mode="widthFix" >
      </div>
      <div class="info ">
        <div class="row red">
            <div class="left">
               {{book.title}}
            </div>
            <div class="right">
               {{book.rating}}分
               <star :rating='book.rating'></star>
            </div>
        </div>
        <div class="row">
            <div class="left">
              {{book.author[0]}}
            </div>
            <div class="right">
              浏览量：{{book.count}}
            </div>
        </div>
        <div class="row red">
            <div class="left">
              {{book.publisher}}
            </div>
            <div class="right">
              {{book.nickName}}
            </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import star from '@/components/star'
export default {
  props: ['book'],
  data(){
     return {
       detailUrl:'/pages/detail/main?id='+this.book.id
     }
  },
  components:{
    star
  }
}
</script>

<style  scoped>
.book{
   display: flex;
   border:1px solid #ccc;
   margin:5px 0;
   padding:5rpx;
}
.book .img{
  width: 180rpx;
}
.book .img img{
  width: 100%;
}
.book .info{
  width: 550rpx;
  /* padding: 5px; */
  display: flex;
  flex-direction: column;
  font-size:14px;
}
.book .info .row{
  display: flex;
  flex:1;
  justify-content: space-between;
}
.left,.right{
   /* flex:1; */
   padding: 0 5px;
   display: flex;
   align-items: center;
   justify-content: bottom;
   justify-content: flex-end;
}
.left{
  justify-content: flex-start;
}
</style>
