const {mysql}=require('../qcloud')
 module.exports=async(ctx)=>{
     let pages=ctx.request.query.pages
     const size=10
   let books=await mysql('books')
                      .select("books.*","cSessionInfo.user_info")
                      .join("cSessionInfo","books.open_id","cSessionInfo.open_id")
                      .limit(size)
                      .offset(Number(pages)*size)
                      .orderBy('id','desc')
//    books.author=JSON.parse(books.author)
   
   ctx.state.data={
       books:books.map(item=>{
        const author=JSON.parse(item.author)
        const{id,title,rating,publisher,count,image} =item
        const info= JSON.parse(item.user_info)
        return {
            id,
         author,
         title,rating,publisher,count,
         nickName:info.nickName,
         image
        }
    })
   }
   console.log(1)
}