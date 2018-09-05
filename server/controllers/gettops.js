const {mysql}=require('../qcloud')
module.exports=async (ctx)=>{
    const data=await mysql('books').select('id','title','image','count')
                                  .orderBy('count','desc')
                                .limit(9)
     if(data.length<9){
         ctx.state={
             code:-1,
             data:{
                 msg:'获取失败'
             }
        }
        return
     }
     ctx.state.data={
       list:data
   }
}