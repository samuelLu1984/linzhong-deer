<template>
   
    <div class='books'>
        <imgSwiper  :tops="tops"></imgSwiper>
        <card v-for="(book,index) in books" :key="index" :book="book" ></card>
        <p v-if="!more" class="tips">没有更多了!</p>
    </div>
</template>
<script>
    import Card from '@/components/card';
    import imgSwiper from '@/components/imgSwiper';
    import config from '@/config'
    import {get} from '@/utils/index'
    export default{
        data(){
            return {
                books:[],
                pages:0,
                more:true,
                tops:[]
            }
        },
        components:{
            Card,
            imgSwiper
        },
        methods:{
            async getBook(init){
                if(init){
                    this.pages=0
                    this.more=true;
                }
                const res=await get('/getbook',{pages:this.pages})
                const books=res.books
                if(books.length<10&&this.pages>0){
                    this.more=false
                }
                if(init){
                   this.books=books 
                }else{
                    
                    this.books=this.books.concat(books)
                }
                
               
                wx.stopPullDownRefresh()
            },
            async getTops(){
                const res= await get('/gettops')
                this.tops=res.list
            },
            
        },
        onPullDownRefresh(){
           this.getBook(true)
        },
        onReachBottom(){
            if(!this.more){
                return 
            }
           this.pages++
           this.getBook()
           this.getTops()
        },
        async created() {
            this.getBook(true)
            this.getTops()
        }
        
                  
              
    }    
   
</script>
<style scoped>
   .books{
       padding: 5px;
   } 
   .tips{
       margin-top:10rpx;
       text-align: center;
       font-size: 14px;
       line-height: 30px;
   }
</style>
