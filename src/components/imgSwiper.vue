<template>
    <div>
    <swiper indicator-dots="true"
      autoplay="true" 
      interval="5000" 
      duration="500"
      circular="true"
      
      >
      <div v-for="(imgs,i) in imgUrls" :key='i'>
           
            <swiper-item>
                   <img
                      :src="img.image" 
                      class="slide-image"
                      v-for="(img,index) in imgs" 
                      :key='index'
                      mode="aspectFit"
                      @click='toDetail(img.id)'
                  />
            </swiper-item> 
          
      </div>
    </swiper>
    </div>
</template>
<script>
import {chunk} from '@/utils/index'
    export default{
        props:['tops'],
        computed:{
           imgUrls(){
               return chunk(this.tops,3)
           }
        },
        methods:{
           toDetail(id) {
               console.log(1)
              wx.navigateTo({
                  url:`/pages/detail/main?id=${id}`
              })
           }
        }
    }
</script>
<style >
  swiper{
   border:1px solid #ccc;
   margin:5px 0;
   padding: 5px;
  }
   .slide-image{
       width:33%;
       height:250rpx;
   } 
</style>
