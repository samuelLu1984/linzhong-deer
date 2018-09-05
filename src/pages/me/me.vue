<template>
    <div class="container">
        <div class='userinfo' v-if="!userinfo.openId" @click="login()">
            <img src="/static/img/unlogin.png" >
            <p>点击登录</p>
        </div> 
        <div class='userinfo' v-if="userinfo.openId">
            <img :src="userinfo.avatarUrl" alt="">
            <p>{{userinfo.nickName}}</p>
        </div> 
        <yearProgress></yearProgress>
        <button class='btn' :disabled='!userinfo.openId' @click="getScanCode()">添加图书</button>
    </div>
</template>
<script>
 
 import yearProgress from '@/components/yearProgress';
 import config from '@/config';
 import {post,showModal} from '@/utils/index';
 import qcloud from 'wafer2-client-sdk';
    export default{
        data(){
            return {
               userinfo:{},
               text:'我是用户'
            }
        },
        components:{
            yearProgress
        },
        methods:{
           async addBook(isbn){
            //    console.log(isbn)
              const res=await post('/addbook',{
                   isbn,
                   openId:this.userinfo.openId
               })
                
               if(res.data.code===0){
                     showModal('成功',res.data.data.msg)
               }else{
                   showModal('失败',res.data.data.msg)
               }
           },
           getScanCode() {
               wx.scanCode({
                    success: (res) => {
                      this.addBook(res.result)
                    },
                    fail(err){
                         console.log(err)
                    }
                })
           },
           login(){
                this.userinfo=wx.getStorageSync('userinfo');
                if(!this.userinfo.openId){
                    let self=this
                    qcloud.setLoginUrl(config.loginUrl);
                    qcloud.login({
                        success: function (userInfo) {
                           console.log('登录成功', userInfo);
                            wx.setStorageSync('userinfo',userInfo)
                            self.userinfo=userInfo
                        },
                        fail: function (err) {
                            console.log('登录失败', err);
                        }
                    });  
                }
           }
                
        },
        async created() {
             this.login()   
        }
        
        
        
       
            
        
    }
</script>
<style scoped>
   .userinfo{
      text-align: center;
      margin-bottom: 30rpx;
   }
   .userinfo img{
       width: 150rpx;
       height: 150rpx;
       border-radius: 50%; 
   }
</style>
