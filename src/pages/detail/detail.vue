<template>
    <div class="">
         <bookInfo :book="detail"></bookInfo>
         <button
          
           class="btn"
           open-type="share"
           >
           点击转发
         </button>
         <button class="btn" @click="toBook()">返回首页</button>
    </div>
</template>
<script>
import {get} from '@/utils/index'
import bookInfo from '@/components/bookInfo'
    export default{
        data(){
            return{
                id:'',
                detail:{}
            }
        },
        methods:{
          async getDetail(){
             const res=await get('/detail',{id:this.id})
             this.detail=res.detail
            //  console.log(this.detail)
             wx.setNavigationBarTitle({
               title:this.detail.title,
            }) 
          },
          toBook(){
            //   console.log(1)
             wx.navigateBack()
          }
        },
        mounted() {
            this.id=this.$root.$mp.query.id 
            this.getDetail()
            
        },
        components:{
            bookInfo
        },
        onShareAppMessage: function (res) {
              if (res.from === 'button') {
            // 来自页面内转发按钮
              console.log(res.target)
            }
           return {
             title: this.detail.title,
             path: '/pages/detail/main?id='+this.id
         }
       }

    }
</script>