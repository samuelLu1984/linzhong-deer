<template>
    <div class="container">
        <h3>我添加的图书</h3>
       <div class="mybook">
            
      <div v-for="book in mybooks" :key='book.id' class='bookcard'>
        <bookcard :bookitem='book'></bookcard>
      </div>
       </div>
    </div>
</template>
<script>
import config from '@/config.js'
import BookCard from '@/components/bookCard'
import {get} from '@/utils'
    export default{
      data(){
        return{
          mybooks:[]
        }  
      },
      components:{
        bookcard:BookCard
      },
      methods:{
        async getMybooks(){
            const userinfo=wx.getStorageSync('userinfo');
            const res=await get('/getMyBook',{openId:userinfo.openId})
            this.mybooks=res.mybooks
            console.log(this.mybooks)
        }
      },
      created() {
        this.getMybooks()
      }
    }
</script>
<style >
    .mybook{
        width: 100%;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
        
        
    }
    .bookcard{
          display: flex;
          width:180rpx;
          min-height: 200rpx;
          /* border:1px solid #ccc; */
          margin:20rpx;
          
    }
    .bookcard img{
        height:270rpx;
        display:block;
    }
</style>
