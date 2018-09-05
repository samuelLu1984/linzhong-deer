<template>
    <div class="bookinfo">
      <div class='thumb'>
          <img :src="book.image" mode="scaleToFill" lazy-load="false" class='back'>
          <div class="info">
              <img :src="book.image" mode="aspectFit" lazy-load="false" >
              <p class="red">{{book.title}}</p>
              <p >{{book.author}}</p>
          </div>
      </div>
      <div class="detail">
          <div class="row">
             <div class="left">
                 <img
                   :src="book.avatarUrl"
                   mode="scaleToFill"
                   lazy-load="false">
                 
                 {{book.nickName}}</div>
             <div class="right">
                 <text>{{book.rating}}分</text>
                 <star :rating="book.rating"></star>
             </div>
          </div>
          <div class="row">
              <div class="left">{{book.publisher}}</div>
              <div class="left">{{book.price}}</div>
          </div>
      </div>
      <div class="tags" >
        <p :key='i' v-for="(tag,i) in book.tags" class="red">{{tag[0]}}&nbsp;&nbsp;{{tag[1]}}</p>
      </div>
      <div class="sum">
          【内容简介】
          <p :key='i' v-for="(sum,i) in book.summary">{{sum}}</p>
      </div>
    </div>
</template>
<script>
import star from '@/components/star'
    export default{
        props:['book'],
        components:{
            star
        }
    }
</script>
<style >
   .thumb{
       overflow: hidden;
       width: 100%;
       height: 450rpx;
       position: relative;
   }
   img.back{
      width: 100%;
      filter:blur(15px)
  }
  .thumb .info{
      position: absolute;
      width:100%;
      top:30rpx;
      text-align: center;
      font-size: 12px;
  }
  .thumb .info img{
      height: 300rpx;
  }
  .thumb .info p{
      padding: 10rpx 0;
  }
  .detail{
      width: 100%;
      margin-top: 10rpx;
      font-size: 14px;
      text-align: left;
      /* padding: 0 10rpx; */
  }
  .detail .row{
      display: flex;
      margin: 6PX 0;
      justify-content: space-between;
      padding: 10rpx;
  }
  .detail .row .right{
      text-align: rigth;
       display: flex;
       align-items: center;
  }
  .detail .row img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
  }
  .tags p{
      display:inline-block;
      border:1px solid red;
      padding: 5rpx;
      margin: 5rpx;
      border-radius: 10rpx;
      font-size: 14px;
  }
  .sum{
      padding: 0 10rpx;
      margin:10px 0;
  }
  .sum p{
      font-size: 14px;
      text-indent: 2em;
      line-height:2em;
      margin:5px 0;
  }
</style>
